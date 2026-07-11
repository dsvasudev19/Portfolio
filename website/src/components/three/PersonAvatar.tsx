"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const SKIN = "#d99e73";
const OUTFIT = "#1f2937";
const OUTFIT_DARK = "#111827";
const STONE = "#9ca3af";

function useGroundGlowTexture() {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    const texture = new THREE.CanvasTexture(canvas);
    if (!ctx) return texture;
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, "rgba(16, 185, 129, 0.4)");
    gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.2)");
    gradient.addColorStop(1, "rgba(16, 185, 129, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    texture.needsUpdate = true;
    return texture;
  }, []);
}

function usePointerTarget() {
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return target;
}

function Leg({ side }: { side: 1 | -1 }) {
  return (
    <group position={[side * 0.22, -0.42, 0.28]} rotation={[1.15, 0, side * 0.12]}>
      <mesh position={[0, -0.12, 0]}>
        <capsuleGeometry args={[0.09, 0.22, 4, 12]} />
        <meshStandardMaterial color={OUTFIT_DARK} roughness={0.65} />
      </mesh>
      <mesh position={[0, -0.3, 0.08]} rotation={[0.35, 0, 0]}>
        <capsuleGeometry args={[0.08, 0.2, 4, 12]} />
        <meshStandardMaterial color={OUTFIT_DARK} roughness={0.65} />
      </mesh>
      <mesh position={[0, -0.44, 0.16]}>
        <boxGeometry args={[0.16, 0.08, 0.28]} />
        <meshStandardMaterial color="#111827" roughness={0.5} />
      </mesh>
    </group>
  );
}

function Arm({ side }: { side: 1 | -1 }) {
  const upperRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (upperRef.current) {
      upperRef.current.rotation.x = side === 1 ? -0.35 + Math.sin(t * 1.2) * 0.04 : -0.2;
      upperRef.current.rotation.z = side * 0.08;
    }
  });

  return (
    <group ref={upperRef} position={[side * 0.38, 0.08, 0.02]} rotation={[-0.2, 0, side * 0.15]}>
      <mesh position={[0, -0.12, 0]}>
        <capsuleGeometry args={[0.08, 0.2, 4, 12]} />
        <meshStandardMaterial color={OUTFIT} roughness={0.6} />
      </mesh>
      <group position={[0, -0.24, 0.02]} rotation={side === 1 ? [-0.55, 0, 0] : [-0.35, 0, 0]}>
        <mesh position={[0, -0.11, 0.04]}>
          <capsuleGeometry args={[0.07, 0.18, 4, 12]} />
          <meshStandardMaterial color={OUTFIT} roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.22, 0.08]}>
          <sphereGeometry args={[0.07, 14, 14]} />
          <meshStandardMaterial color={SKIN} roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

function Person() {
  const pointer = usePointerTarget();
  const headRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const px = pointer.current.x;
    const py = pointer.current.y;

    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, px * 0.3, 0.06);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, py * 0.12, 0.06);
    }
    if (torsoRef.current) {
      torsoRef.current.rotation.y = THREE.MathUtils.lerp(torsoRef.current.rotation.y, px * 0.1, 0.05);
      torsoRef.current.position.y = 0.42 + Math.sin(t * 1.1) * 0.015;
    }
  });

  return (
    <group ref={torsoRef} position={[0, 0.42, 0]}>
      <mesh position={[0, -0.02, 0.05]} rotation={[0.08, 0, 0]}>
        <boxGeometry args={[0.72, 0.42, 0.42]} />
        <meshStandardMaterial color={OUTFIT} roughness={0.62} />
      </mesh>

      <mesh position={[0.34, 0.12, 0.06]}>
        <sphereGeometry args={[0.15, 20, 20]} />
        <meshStandardMaterial color={OUTFIT} roughness={0.62} />
      </mesh>
      <mesh position={[-0.34, 0.12, 0.06]}>
        <sphereGeometry args={[0.15, 20, 20]} />
        <meshStandardMaterial color={OUTFIT} roughness={0.62} />
      </mesh>

      <mesh position={[0, 0.28, 0.02]}>
        <cylinderGeometry args={[0.09, 0.1, 0.14, 20]} />
        <meshStandardMaterial color={SKIN} roughness={0.6} />
      </mesh>

      <group ref={headRef} position={[0, 0.52, 0.02]}>
        <mesh scale={[1, 1.1, 0.98]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color={SKIN} roughness={0.6} />
        </mesh>

        <mesh position={[0, 0.08, -0.03]} scale={[1.05, 0.58, 1.05]}>
          <sphereGeometry args={[0.26, 24, 24]} />
          <meshStandardMaterial color="#241a14" roughness={0.7} />
        </mesh>

        <mesh position={[0.09, -0.01, 0.24]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.11, 0.012, 8, 24]} />
          <meshStandardMaterial color="#111827" roughness={0.35} metalness={0.2} />
        </mesh>
        <mesh position={[-0.09, -0.01, 0.24]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.11, 0.012, 8, 24]} />
          <meshStandardMaterial color="#111827" roughness={0.35} metalness={0.2} />
        </mesh>
        <mesh position={[0, -0.01, 0.245]}>
          <boxGeometry args={[0.2, 0.012, 0.01]} />
          <meshStandardMaterial color="#111827" roughness={0.35} metalness={0.2} />
        </mesh>

        <mesh position={[0.085, -0.02, 0.245]}>
          <sphereGeometry args={[0.022, 12, 12]} />
          <meshStandardMaterial color="#111827" roughness={0.4} />
        </mesh>
        <mesh position={[-0.085, -0.02, 0.245]}>
          <sphereGeometry args={[0.022, 12, 12]} />
          <meshStandardMaterial color="#111827" roughness={0.4} />
        </mesh>
      </group>

      <Leg side={1} />
      <Leg side={-1} />
      <Arm side={1} />
      <Arm side={-1} />
    </group>
  );
}

function SeatBlock() {
  return (
    <group position={[0, -0.18, 0.05]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.35, 0.38, 0.85]} />
        <meshStandardMaterial color={STONE} roughness={0.85} />
      </mesh>
      <mesh position={[0, -0.2, 0.12]}>
        <boxGeometry args={[1.1, 0.08, 0.65]} />
        <meshStandardMaterial color="#6b7280" roughness={0.8} />
      </mesh>
    </group>
  );
}

function Laptop() {
  return (
    <group position={[0.42, 0.02, 0.35]} rotation={[0, -0.35, 0]}>
      <mesh position={[0, 0, 0]} rotation={[-1.35, 0, 0]}>
        <boxGeometry args={[0.42, 0.02, 0.28]} />
        <meshStandardMaterial color="#374151" roughness={0.45} metalness={0.15} />
      </mesh>
      <mesh position={[0, -0.02, 0.12]}>
        <boxGeometry args={[0.42, 0.02, 0.24]} />
        <meshStandardMaterial color="#4b5563" roughness={0.5} />
      </mesh>
    </group>
  );
}

function GroundGlow() {
  const texture = useGroundGlowTexture();
  return (
    <mesh position={[0, -0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[2.4, 2.4]} />
      <meshBasicMaterial map={texture} transparent opacity={0.55} toneMapped={false} depthWrite={false} />
    </mesh>
  );
}

function Scene() {
  return (
    <group position={[0, -0.75, 0]}>
      <GroundGlow />
      <SeatBlock />
      <Float speed={1.2} floatIntensity={0.35} rotationIntensity={0.05}>
        <Person />
      </Float>
      <Laptop />
    </group>
  );
}

export function PersonAvatar() {
  return (
    <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} camera={{ position: [0.4, 0.15, 5.8], fov: 24 }}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[2, 4, 3]} intensity={1} color="#ffffff" />
      <directionalLight position={[-2, 1, 2]} intensity={0.25} color="#e5e7eb" />
      <pointLight position={[-1.5, 1, 1.5]} intensity={4} color="#10b981" distance={6} />
      <pointLight position={[1.5, 0.5, -1]} intensity={3} color="#38bdf8" distance={6} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
