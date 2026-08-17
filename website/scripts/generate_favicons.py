import zlib
import struct
import math
import os

def decode_png_rgba(filepath):
    with open(filepath, 'rb') as f:
        content = f.read()
    idx = 8
    idat = bytearray()
    width = height = None
    while idx < len(content):
        length = struct.unpack('>I', content[idx:idx+4])[0]
        ctype = content[idx+4:idx+8]
        data = content[idx+8:idx+8+length]
        idx += 12 + length
        if ctype == b'IHDR':
            width, height = struct.unpack('>II', data[:8])
        elif ctype == b'IDAT':
            idat.extend(data)
    decompressed = zlib.decompress(idat)
    
    bpp = 4
    stride = width * bpp + 1
    pixels = bytearray(width * height * 4)
    prev_row = bytearray(width * bpp)
    
    for y in range(height):
        row_start = y * stride
        filter_type = decompressed[row_start]
        row_data = decompressed[row_start+1 : row_start+stride]
        current_row = bytearray(width * bpp)
        
        if filter_type == 0:
            current_row[:] = row_data
        elif filter_type == 1:
            for i in range(len(row_data)):
                left = current_row[i - bpp] if i >= bpp else 0
                current_row[i] = (row_data[i] + left) & 0xff
        elif filter_type == 2:
            for i in range(len(row_data)):
                up = prev_row[i]
                current_row[i] = (row_data[i] + up) & 0xff
        elif filter_type == 3:
            for i in range(len(row_data)):
                left = current_row[i - bpp] if i >= bpp else 0
                up = prev_row[i]
                current_row[i] = (row_data[i] + ((left + up) >> 1)) & 0xff
        elif filter_type == 4:
            for i in range(len(row_data)):
                left = current_row[i - bpp] if i >= bpp else 0
                up = prev_row[i]
                upper_left = prev_row[i - bpp] if i >= bpp else 0
                p = left + up - upper_left
                pa = abs(p - left)
                pb = abs(p - up)
                pc = abs(p - upper_left)
                if pa <= pb and pa <= pc:
                    pr = left
                elif pb <= pc:
                    pr = up
                else:
                    pr = upper_left
                current_row[i] = (row_data[i] + pr) & 0xff
        
        pixels[y * width * 4 : (y + 1) * width * 4] = current_row
        prev_row = current_row
        
    return width, height, pixels

def encode_png_rgba(width, height, raw_rgba):
    raw_data = bytearray()
    bpp = 4
    for y in range(height):
        raw_data.append(0) # Filter type 0
        raw_data.extend(raw_rgba[y * width * bpp : (y + 1) * width * bpp])
    
    compressed = zlib.compress(raw_data, level=9)
    
    def chunk(two_type, data):
        return struct.pack('>I', len(data)) + two_type + data + struct.pack('>I', zlib.crc32(two_type + data) & 0xffffffff)
    
    header = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0) # RGBA
    return b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', header) + chunk(b'IDAT', compressed) + chunk(b'IEND', b'')

def crop_center_square(width, height, pixels):
    sq_size = min(width, height)
    x_off = (width - sq_size) // 2
    y_off = (height - sq_size) // 2
    out = bytearray(sq_size * sq_size * 4)
    
    for y in range(sq_size):
        src_y = y_off + y
        src_row_start = (src_y * width + x_off) * 4
        dest_row_start = y * sq_size * 4
        out[dest_row_start : dest_row_start + sq_size * 4] = pixels[src_row_start : src_row_start + sq_size * 4]
        
    return sq_size, out

def resize_bilinear(src_size, src_pixels, dest_size):
    out = bytearray(dest_size * dest_size * 4)
    scale = (src_size - 1) / float(dest_size - 1) if dest_size > 1 else 0
    
    for dy in range(dest_size):
        sy = dy * scale
        sy_i = int(sy)
        sy_f = sy - sy_i
        sy_i2 = min(sy_i + 1, src_size - 1)
        
        for dx in range(dest_size):
            sx = dx * scale
            sx_i = int(sx)
            sx_f = sx - sx_i
            sx_i2 = min(sx_i + 1, src_size - 1)
            
            p00_idx = (sy_i * src_size + sx_i) * 4
            p10_idx = (sy_i * src_size + sx_i2) * 4
            p01_idx = (sy_i2 * src_size + sx_i) * 4
            p11_idx = (sy_i2 * src_size + sx_i2) * 4
            
            w00 = (1 - sx_f) * (1 - sy_f)
            w10 = sx_f * (1 - sy_f)
            w01 = (1 - sx_f) * sy_f
            w11 = sx_f * sy_f
            
            dest_idx = (dy * dest_size + dx) * 4
            for c in range(4):
                val = (src_pixels[p00_idx + c] * w00 +
                       src_pixels[p10_idx + c] * w10 +
                       src_pixels[p01_idx + c] * w01 +
                       src_pixels[p11_idx + c] * w11)
                out[dest_idx + c] = int(round(val))
                
    return out

def apply_icon_frame(size, rgba_pixels):
    framed = bytearray(size * size * 4)
    center = (size - 1) / 2.0
    radius = size * 0.46
    border_width = max(1.5, size * 0.04)
    
    for y in range(size):
        for x in range(size):
            dx = x - center
            dy = y - center
            dist = math.sqrt(dx*dx + dy*dy)
            
            dest_idx = (y * size + x) * 4
            src_idx = (y * size + x) * 4
            
            if dist > radius:
                r_square = size * 0.22
                corner_x = min(x, size - 1 - x)
                corner_y = min(y, size - 1 - y)
                if corner_x < r_square and corner_y < r_square:
                    cdist = math.sqrt((r_square - corner_x)**2 + (r_square - corner_y)**2)
                    if cdist > r_square:
                        framed[dest_idx : dest_idx + 4] = [0, 0, 0, 0]
                        continue
                
                framed[dest_idx : dest_idx + 4] = [15, 23, 42, 255]
            elif dist > (radius - border_width):
                framed[dest_idx : dest_idx + 4] = [163, 230, 53, 255]
            else:
                r, g, b, a = rgba_pixels[src_idx : src_idx + 4]
                inner_edge = (radius - border_width) - dist
                if inner_edge < 1.0 and inner_edge >= 0:
                    blend = inner_edge
                    r = int(r * blend + 163 * (1 - blend))
                    g = int(g * blend + 230 * (1 - blend))
                    b = int(b * blend + 53 * (1 - blend))
                framed[dest_idx : dest_idx + 4] = [r, g, b, 255]
                
    return framed

def create_ico(png_data_dict):
    sizes = sorted(png_data_dict.keys())
    num_images = len(sizes)
    ico_header = struct.pack('<HHH', 0, 1, num_images)
    entries = bytearray()
    offset = 6 + 16 * num_images
    image_data_blocks = bytearray()
    
    for sz in sizes:
        png_bytes = png_data_dict[sz]
        sz_byte = 0 if sz >= 256 else sz
        entry = struct.pack('<BBBBHHII', sz_byte, sz_byte, 0, 0, 1, 32, len(png_bytes), offset)
        entries.extend(entry)
        image_data_blocks.extend(png_bytes)
        offset += len(png_bytes)
        
    return ico_header + entries + image_data_blocks

def main():
    src_path = 'public/assets/author.png'
    print(f'Decoding source PNG: {src_path}...')
    w, h, raw_pixels = decode_png_rgba(src_path)
    print(f'Source loaded: {w}x{h}')
    
    sq_size, sq_pixels = crop_center_square(w, h, raw_pixels)
    print(f'Cropped center square: {sq_size}x{sq_size}')
    
    target_sizes = [16, 32, 48, 96, 180, 192, 512]
    png_outputs = {}
    
    for sz in target_sizes:
        print(f'Resizing to {sz}x{sz}...')
        resized = resize_bilinear(sq_size, sq_pixels, sz)
        framed = apply_icon_frame(sz, resized)
        png_bytes = encode_png_rgba(sz, sz, framed)
        png_outputs[sz] = png_bytes
        
    os.makedirs('public', exist_ok=True)
    os.makedirs('src/app', exist_ok=True)
    
    with open('public/favicon-16x16.png', 'wb') as f:
        f.write(png_outputs[16])
    with open('public/favicon-32x32.png', 'wb') as f:
        f.write(png_outputs[32])
    with open('public/favicon-48x48.png', 'wb') as f:
        f.write(png_outputs[48])
    with open('public/apple-touch-icon.png', 'wb') as f:
        f.write(png_outputs[180])
    with open('public/android-chrome-192x192.png', 'wb') as f:
        f.write(png_outputs[192])
    with open('public/android-chrome-512x512.png', 'wb') as f:
        f.write(png_outputs[512])
        
    ico_bytes = create_ico({16: png_outputs[16], 32: png_outputs[32], 48: png_outputs[48]})
    with open('public/favicon.ico', 'wb') as f:
        f.write(ico_bytes)
        
    with open('src/app/favicon.ico', 'wb') as f:
        f.write(ico_bytes)
    with open('src/app/apple-icon.png', 'wb') as f:
        f.write(png_outputs[180])
    with open('src/app/icon.png', 'wb') as f:
        f.write(png_outputs[512])
        
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="110" fill="#0f172a"/>
  <circle cx="256" cy="256" r="215" fill="#a3e635"/>
  <circle cx="256" cy="256" r="195" fill="#0f172a"/>
  <text x="256" y="295" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="140" font-weight="900" fill="#a3e635" text-anchor="middle">V{}</text>
</svg>'''
    with open('public/icon.svg', 'w') as f:
        f.write(svg_content)
        
    print('All favicon PNG, ICO, SVG, and App Router fallback files successfully generated!')

if __name__ == '__main__':
    main()
