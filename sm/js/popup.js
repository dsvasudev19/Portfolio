// js/popup.js
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const loginForm = document.getElementById('login-form');
  const articleDetails = document.getElementById('article-details');
  const loadingContainer = document.getElementById('loading-container');
  const noDoiContainer = document.getElementById('no-doi-container');
  
  const loginFormElement = document.getElementById('login-form-element');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginButton = document.getElementById('login-button');
  const loginError = document.getElementById('login-error');
  
  const articleMetaContainer = document.getElementById('article-meta-container');
  const librarySelect = document.getElementById('library-select');
  const addToLibraryButton = document.getElementById('add-to-library-button');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  
  // State
  let currentDoi = null;
  let libraries = [];
  
  // Initialize
  function init() {
    // Check if apiClient is available
    if (typeof apiClient === 'undefined') {
      console.error('apiClient is not defined. Make sure api.js is loaded.');
      showError('Failed to load extension components. Please try again.');
      return;
    }
    
    // Check if user is logged in
    checkAuthStatus();
    
    // Get DOI from background script
    getCurrentDoi();
    
    // Set up event listeners
    loginFormElement.addEventListener('submit', handleLogin);
    addToLibraryButton.addEventListener('click', handleAddToLibrary);
  }
  
  // Check authentication status
  async function checkAuthStatus() {
    try {
      const response = await sendMessage({ type: 'GET_AUTH_TOKEN' });
      if (response.token) {
        // User is logged in
        showArticleDetails();
      } else {
        // User is not logged in
        showLoginForm();
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      showLoginForm();
    }
  }
  
  // Get current DOI from background script or storage
  async function getCurrentDoi() {
    try {
      // First try to get from chrome.storage.local directly
      const result = await chrome.storage.local.get('currentDoi');
      const doiFromStorage = result.currentDoi;
      
      if (doiFromStorage) {
        console.log(`[Writem] Got DOI from storage: ${doiFromStorage}`);
        currentDoi = doiFromStorage;
        // Clear from storage
        chrome.storage.local.remove('currentDoi');
        fetchArticleMetadata(currentDoi);
        fetchLibraries();
        return;
      }
      
      // If not in storage, try to get from background script
      const response = await sendMessage({ type: 'GET_CURRENT_DOI' });
      if (response.doi) {
        console.log(`[Writem] Got DOI from background: ${response.doi}`);
        currentDoi = response.doi;
        fetchArticleMetadata(currentDoi);
        fetchLibraries();
      } else {
        showNoDoiDetected();
      }
    } catch (error) {
      console.error('Error getting DOI:', error);
      showNoDoiDetected();
    }
  }
  
  // Fetch article metadata
  async function fetchArticleMetadata(doi) {
    try {
      showLoading();
      const metadata = await apiClient.getArticleMetadata(doi);
      displayArticleMetadata(metadata);
      showArticleDetails();
    } catch (error) {
      console.error('Error fetching article metadata:', error);
      showError('Failed to load article metadata');
      showNoDoiDetected();
    }
  }
  
  // Display article metadata
  function displayArticleMetadata(metadata) {
    articleMetaContainer.innerHTML = `
      <h3 class="article-title">${metadata.title}</h3>
      <p class="article-authors">${metadata.authors.join(', ')}</p>
      <p class="article-journal">${metadata.journal} (${metadata.year})</p>
      <p class="article-doi">DOI: ${metadata.doi}</p>
      <div class="article-abstract">
        <h4>Abstract</h4>
        <p>${metadata.abstract}</p>
      </div>
    `;
  }
  
  // Fetch user libraries
  async function fetchLibraries() {
    try {
      libraries = await apiClient.getLibraries();
      
      // Clear and populate library select
      librarySelect.innerHTML = '';
      libraries.forEach(library => {
        const option = document.createElement('option');
        option.value = library.id;
        option.textContent = library.name;
        librarySelect.appendChild(option);
      });
      
      // Enable add button if libraries are available
      if (libraries.length > 0) {
        addToLibraryButton.disabled = false;
      }
    } catch (error) {
      console.error('Error fetching libraries:', error);
      showError('Failed to load your libraries');
    }
  }
  
  // Handle login form submission
  async function handleLogin(event) {
    event.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    // Show loading state
    loginButton.disabled = true;
    loginButton.textContent = 'Logging in...';
    hideError();
    
    try {
      const { token, refreshToken } = await apiClient.login(email, password);
      
      // Store tokens
      await storageHelper.set('authToken', token);
      await storageHelper.set('refreshToken', refreshToken);
      
      // Show success and reload popup
      showSuccess('Login successful!');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
      showError('Login failed. Please check your credentials.');
      loginButton.disabled = false;
      loginButton.textContent = 'Login';
    }
  }
  
  // Handle adding article to library
  async function handleAddToLibrary() {
    const libraryId = librarySelect.value;
    
    if (!libraryId) {
      showError('Please select a library');
      return;
    }
    
    // Show loading state
    addToLibraryButton.disabled = true;
    addToLibraryButton.textContent = 'Adding...';
    hideError();
    hideSuccess();
    
    try {
      await apiClient.addArticleToLibrary(libraryId, currentDoi);
      showSuccess('Article successfully added to your library!');
    } catch (error) {
      console.error('Error adding article to library:', error);
      showError('Failed to add article to library');
      addToLibraryButton.disabled = false;
      addToLibraryButton.textContent = 'Add to Library';
    }
  }
  
  // UI Helper Functions
  function showLoginForm() {
    loginForm.classList.remove('hidden');
    articleDetails.classList.add('hidden');
    loadingContainer.classList.add('hidden');
    noDoiContainer.classList.add('hidden');
  }
  
  function showArticleDetails() {
    loginForm.classList.add('hidden');
    articleDetails.classList.remove('hidden');
    loadingContainer.classList.add('hidden');
    noDoiContainer.classList.add('hidden');
  }
  
  function showLoading() {
    loginForm.classList.add('hidden');
    articleDetails.classList.add('hidden');
    loadingContainer.classList.remove('hidden');
    noDoiContainer.classList.add('hidden');
  }
  
  function showNoDoiDetected() {
    loginForm.classList.add('hidden');
    articleDetails.classList.add('hidden');
    loadingContainer.classList.add('hidden');
    noDoiContainer.classList.remove('hidden');
  }
  
  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
  }
  
  function hideError() {
    errorMessage.classList.add('hidden');
  }
  
  function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.classList.remove('hidden');
  }
  
  function hideSuccess() {
    successMessage.classList.add('hidden');
  }
  
  // Initialize the popup
  init();
});