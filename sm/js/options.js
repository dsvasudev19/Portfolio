// js/options.js
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const accountInfo = document.getElementById('account-info');
  const logoutButton = document.getElementById('logout-button');
  const autoInjectCheckbox = document.getElementById('auto-inject');
  const notificationCheckbox = document.getElementById('notification-enabled');
  const statusMessage = document.getElementById('status-message');
  
  // Initialize
  function init() {
    // Load user info
    loadUserInfo();
    
    // Load settings
    loadSettings();
    
    // Set up event listeners
    logoutButton.addEventListener('click', handleLogout);
    autoInjectCheckbox.addEventListener('change', saveSettings);
    notificationCheckbox.addEventListener('change', saveSettings);
  }
  
  // Load user information
  async function loadUserInfo() {
    try {
      const token = await storageHelper.get('authToken');
      
      if (token) {
        // In a real implementation, you would fetch user info from the API
        // For now, just show a generic message
        accountInfo.innerHTML = `
          <p>You are logged in to Writem.</p>
          <p>Token: ${token.substring(0, 10)}...</p>
        `;
        logoutButton.disabled = false;
      } else {
        accountInfo.innerHTML = `
          <p>You are not logged in.</p>
          <p>Please <a href="#" id="login-link">log in</a> to use the extension.</p>
        `;
        
        // Add login link handler
        document.getElementById('login-link').addEventListener('click', (e) => {
          e.preventDefault();
          chrome.runtime.openOptionsPage();
        });
        
        logoutButton.disabled = true;
      }
    } catch (error) {
      console.error('Error loading user info:', error);
      accountInfo.innerHTML = `<p>Error loading account information.</p>`;
    }
  }
  
  // Load settings
  async function loadSettings() {
    try {
      const settings = await storageHelper.get('settings') || {};
      
      // Set checkbox states
      autoInjectCheckbox.checked = settings.autoInject !== false; // Default to true
      notificationCheckbox.checked = settings.notifications !== false; // Default to true
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  }
  
  // Save settings
  async function saveSettings() {
    try {
      const settings = {
        autoInject: autoInjectCheckbox.checked,
        notifications: notificationCheckbox.checked
      };
      
      await storageHelper.set('settings', settings);
      
      // Show success message
      showStatusMessage('Settings saved successfully!', 'success');
    } catch (error) {
      console.error('Error saving settings:', error);
      showStatusMessage('Error saving settings.', 'error');
    }
  }
  
  // Handle logout
  async function handleLogout() {
    try {
      // Clear tokens
      await storageHelper.remove(['authToken', 'refreshToken']);
      
      // Show success message
      showStatusMessage('Logged out successfully!', 'success');
      
      // Reload the page
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error('Error logging out:', error);
      showStatusMessage('Error logging out.', 'error');
    }
  }
  
  // Show status message
  function showStatusMessage(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type}`;
    statusMessage.classList.remove('hidden');
    
    // Hide message after 3 seconds
    setTimeout(() => {
      statusMessage.classList.add('hidden');
    }, 3000);
  }
  
  // Initialize the options page
  init();
});