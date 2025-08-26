// content/detectDOI.js
/**
 * Attempts to detect a DOI from the current page
 * @returns DOI string if found, otherwise null
 */
function detectDOI() {
  // DOI regex pattern (case-insensitive)
  const doiRegex = /10\.\d{4,9}\/[-._;()/:A-Z0-9]+/gi;
  
  console.log('[Writem] Starting DOI detection...');
  
  // Strategy 1: Check meta tags
  console.log('[Writem] Checking meta tags...');
  const metaTags = document.querySelectorAll('meta');
  for (const meta of metaTags) {
    // Check for common DOI meta tag names
    const doiMetaNames = [
      'citation_doi', 
      'doi', 
      'DC.identifier', 
      'prism.doi'
    ];
    
    if (doiMetaNames.includes(meta.getAttribute('name') || '')) {
      const doi = meta.getAttribute('content');
      console.log(`[Writem] Found potential DOI in meta tag: ${doi}`);
      if (doi && doiRegex.test(doi)) {
        console.log(`[Writem] Valid DOI found in meta tag: ${doi}`);
        return doi;
      }
    }
  }
  
  // Strategy 2: Check URL parameters
  console.log('[Writem] Checking URL parameters...');
  const urlParams = new URLSearchParams(window.location.search);
  const doiFromUrl = urlParams.get('doi');
  if (doiFromUrl && doiRegex.test(doiFromUrl)) {
    console.log(`[Writem] Valid DOI found in URL parameters: ${doiFromUrl}`);
    return doiFromUrl;
  }
  
  // Strategy 3: Check page URL itself
  console.log('[Writem] Checking page URL...');
  const urlPath = window.location.pathname;
  const urlMatch = urlPath.match(doiRegex);
  if (urlMatch) {
    console.log(`[Writem] Valid DOI found in page URL: ${urlMatch[0]}`);
    return urlMatch[0];
  }
  
  // Strategy 4: Check specific elements that commonly contain DOI
  console.log('[Writem] Checking specific DOI elements...');
  const doiSelectors = [
    '.doi', 
    '.citation-doi', 
    '[data-doi]', 
    '.article-doi',
    '.document-identifier'
  ];
  
  for (const selector of doiSelectors) {
    console.log(`[Writem] Checking selector: ${selector}`);
    const elements = document.querySelectorAll(selector);
    console.log(`[Writem] Found ${elements.length} elements with selector ${selector}`);
    
    for (const element of elements) {
      const text = element.textContent || element.getAttribute('data-doi') || '';
      console.log(`[Writem] Element content: ${text}`);
      const match = text.match(doiRegex);
      if (match) {
        console.log(`[Writem] Valid DOI found in element: ${match[0]}`);
        return match[0];
      }
    }
  }
  
  // Strategy 5: Check for DOI in page content
  console.log('[Writem] Checking content sections...');
  const contentSelectors = [
    '.citation', 
    '.article-footer', 
    '.article-info',
    '.article-meta',
    '.document-footer',
    '.document-meta'
  ];
  
  for (const selector of contentSelectors) {
    console.log(`[Writem] Checking content selector: ${selector}`);
    const elements = document.querySelectorAll(selector);
    console.log(`[Writem] Found ${elements.length} elements with content selector ${selector}`);
    
    for (const element of elements) {
      const text = element.textContent || '';
      const match = text.match(doiRegex);
      if (match) {
        console.log(`[Writem] Valid DOI found in content: ${match[0]}`);
        return match[0];
      }
    }
  }
  
  // Strategy 6: Check entire page text as last resort
  console.log('[Writem] Checking entire page text...');
  const pageText = document.body.innerText;
  const match = pageText.match(doiRegex);
  
  if (match) {
    console.log(`[Writem] Valid DOI found in page text: ${match[0]}`);
    return match[0];
  }
  
  console.log('[Writem] No DOI found on page');
  return null;
}