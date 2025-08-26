// content/injectButton.js
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
    chrome.runtime.sendMessage({ 
      type: 'OPEN_POPUP', 
      payload: { doi } 
    });
  });
  
  // Add button to container
  buttonContainer.appendChild(button);
  
  console.log('[Writem] Button injected successfully');
}