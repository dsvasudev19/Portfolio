// js/options.js
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const accountInfo = document.getElementById('account-info');
  const logoutButton = document.getElementById('logout-button');
  const autoInjectCheckbox = document.getElementById('auto-inject');
  const notificationCheckbox = document.getElementById('notification-enabled');
  const librariesContainer = document.getElementById('libraries-container');
  const newLibraryName = document.getElementById('new-library-name');
  const addLibraryButton = document.getElementById('add-library-button');
  const statusMessage = document.getElementById('status-message');
  
  // Initialize
  function init() {
    // Load user info
    loadUserInfo();
    
    // Load settings
    loadSettings();
    
    // Load libraries
    loadLibraries();
    
    // Set up event listeners
    logoutButton.addEventListener('click', handleLogout);
    autoInjectCheckbox.addEventListener('change', saveSettings);
    notificationCheckbox.addEventListener('change', saveSettings);
    addLibraryButton.addEventListener('click', handleAddLibrary);
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
  
  // Load libraries
  async function loadLibraries() {
    try {
      const libraries = await apiClient.getLibraries();
      
      // Display libraries
      librariesContainer.innerHTML = '';
      
      if (libraries.length === 0) {
        librariesContainer.innerHTML = '<p>No libraries found.</p>';
        return;
      }
      
      const librariesList = document.createElement('ul');
      librariesList.style.listStyleType = 'none';
      librariesList.style.padding = '0';
      
      libraries.forEach(library => {
        const listItem = document.createElement('li');
        listItem.style.marginBottom = '8px';
        listItem.style.display = 'flex';
        listItem.style.justifyContent = 'space-between';
        listItem.style.alignItems = 'center';
        
        const libraryName = document.createElement('span');
        libraryName.textContent = library.name;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'secondary-button';
        deleteButton.style.padding = '4px 8px';
        deleteButton.style.marginLeft = '8px';
        deleteButton.dataset.libraryId = library.id;
        deleteButton.addEventListener('click', handleDeleteLibrary);
        
        listItem.appendChild(libraryName);
        listItem.appendChild(deleteButton);
        librariesList.appendChild(listItem);
      });
      
      librariesContainer.appendChild(librariesList);
    } catch (error) {
      console.error('Error loading libraries:', error);
      librariesContainer.innerHTML = '<p>Error loading libraries.</p>';
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
  
  // Handle adding a new library
  async function handleAddLibrary() {
    const name = newLibraryName.value.trim();
    
    if (!name) {
      showStatusMessage('Please enter a library name.', 'error');
      return;
    }
    
    try {
      // Get existing libraries
      const libraries = JSON.parse(localStorage.getItem('mockLibraries') || '[]');
      
      // Create new library
      const newLibrary = {
        id: Date.now().toString(), // Simple ID generation
        name: name,
        userId: '1' // Hardcoded for demo
      };
      
      // Add to libraries
      libraries.push(newLibrary);
      
      // Save back to localStorage
      localStorage.setItem('mockLibraries', JSON.stringify(libraries));
      
      // Clear input
      newLibraryName.value = '';
      
      // Reload libraries
      loadLibraries();
      
      // Show success message
      showStatusMessage('Library added successfully!', 'success');
    } catch (error) {
      console.error('Error adding library:', error);
      showStatusMessage('Error adding library.', 'error');
    }
  }
  
  // Handle deleting a library
  async function handleDeleteLibrary(event) {
    const libraryId = event.target.dataset.libraryId;
    
    if (!libraryId) {
      return;
    }
    
    try {
      // Get existing libraries
      const libraries = JSON.parse(localStorage.getItem('mockLibraries') || '[]');
      
      // Filter out the library to delete
      const updatedLibraries = libraries.filter(library => library.id !== libraryId);
      
      // Save back to localStorage
      localStorage.setItem('mockLibraries', JSON.stringify(updatedLibraries));
      
      // Also remove any articles in this library
      const articles = JSON.parse(localStorage.getItem('mockArticles') || '{}');
      if (articles[libraryId]) {
        delete articles[libraryId];
        localStorage.setItem('mockArticles', JSON.stringify(articles));
      }
      
      // Reload libraries
      loadLibraries();
      
      // Show success message
      showStatusMessage('Library deleted successfully!', 'success');
    } catch (error) {
      console.error('Error deleting library:', error);
      showStatusMessage('Error deleting library.', 'error');
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