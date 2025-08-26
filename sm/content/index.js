// content/index.js

// DOI Detection Function
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

// Button Injection Function
// Button Injection Function
function injectButton(doi) {
  // Find article title element
  const titleElement = document.querySelector('h1') || 
                      document.querySelector('h2') || 
                      document.querySelector('title');
  
  if (!titleElement) {
    console.log('[Writem] No title element found to inject button');
    return;
  }
  
  // Create container for button
  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'writem-button-container';
  
  // Insert after title element
  titleElement.parentNode?.insertBefore(
    buttonContainer, 
    titleElement.nextSibling
  );
  
  // Create button
  const button = document.createElement('button');
  button.id = 'writem-add-to-library';
  button.textContent = 'Add to Library';
  
  // Style the button
  button.style.backgroundColor = '#4285f4';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '4px';
  button.style.padding = '8px 16px';
  button.style.margin = '8px 0';
  button.style.cursor = 'pointer';
  button.style.fontSize = '14px';
  button.style.fontWeight = 'bold';
  button.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
  button.style.display = 'inline-block';
  
  // Add click event listener
  button.addEventListener('click', () => {
    console.log(`[Writem] Button clicked for DOI: ${doi}`);
    
    // Store DOI in chrome.storage.local for popup to retrieve
    chrome.storage.local.set({ currentDoi: doi }, () => {
      console.log('[Writem] DOI stored in storage');
      
      // Try to open popup programmatically
      chrome.runtime.sendMessage({ 
        type: 'OPEN_POPUP', 
        payload: { doi } 
      }, (response) => {
        if (chrome.runtime.lastError) {
          console.error('[Writem] Error opening popup:', chrome.runtime.lastError);
          // Fallback: show notification to user
          showNotification('Please click the extension icon to open the popup');
        } else {
          console.log('[Writem] Popup opened successfully');
        }
      });
    });
  });
  
  // Add button to container
  buttonContainer.appendChild(button);
  
  console.log('[Writem] Button injected successfully');
}

// Function to show a notification
function showNotification(message) {
    console.log("show message is called ")
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = '#4285f4';
  notification.style.color = 'white';
  notification.style.padding = '12px 20px';
  notification.style.borderRadius = '4px';
  notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  notification.style.zIndex = '9999';
  notification.style.fontFamily = 'Arial, sans-serif';
  notification.style.fontSize = '14px';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Main content script logic
function main() {
  console.log('[Writem] Content script loaded');
  
  const doi = detectDOI();
  
  if (doi) {
    console.log(`[Writem] DOI detected: ${doi}`);
    injectButton(doi);
  } else {
    console.log('[Writem] No DOI detected on this page');
  }
}

// Run when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}