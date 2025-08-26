// background/index.js
// Store current DOI for popup
let currentDoi = null;

// Authentication management
const authManager = {
  async getToken() {
    const result = await chrome.storage.local.get('authToken');
    return result.authToken || null;
  },
  
  async setToken(token) {
    await chrome.storage.local.set({ authToken: token });
  },
  
  async logout() {
    await chrome.storage.local.remove(['authToken', 'refreshToken']);
  }
};

// Initialize
chrome.runtime.onInstalled.addListener(() => {
  console.log('Writem Smart Reader extension installed');
});

// Set up message listeners
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_AUTH_TOKEN') {
    authManager.getToken().then(token => {
      sendResponse({ token });
    });
    return true; // Indicates async response
  }
  
  if (message.type === 'LOGOUT') {
    authManager.logout().then(() => {
      sendResponse({ success: true });
    });
    return true;
  }
  
  if (message.type === 'OPEN_POPUP') {
    // Store the DOI for when popup opens
    currentDoi = message.payload.doi;
    console.log(`[Writem] Stored DOI: ${currentDoi}`);
    
    // Try to open the popup
    chrome.action.openPopup().then(() => {
      console.log('[Writem] Popup opened successfully');
      sendResponse({ success: true });
    }).catch(err => {
      console.error('[Writem] Failed to open popup:', err);
      sendResponse({ success: false, error: err.message });
    });
    
    return true; // Indicates async response
  }
  
  if (message.type === 'GET_CURRENT_DOI') {
    // First try to get from memory
    if (currentDoi) {
      sendResponse({ doi: currentDoi });
      // Clear after sending
      currentDoi = null;
      return true;
    }
    
    // If not in memory, try to get from storage
    chrome.storage.local.get('currentDoi').then(result => {
      const doi = result.currentDoi;
      sendResponse({ doi });
      // Clear from storage after sending
      if (doi) {
        chrome.storage.local.remove('currentDoi');
      }
    });
    
    return true;
  }
});