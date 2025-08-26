// js/api.js
// Mock API implementation using localStorage

// Initialize mock data if it doesn't exist
function initializeMockData() {
  if (!localStorage.getItem('mockUsers')) {
    const mockUsers = [
      {
        id: '1',
        email: 'test@example.com',
        password: 'password', // In a real app, this would be hashed
        name: 'Test User'
      }
    ];
    localStorage.setItem('mockUsers', JSON.stringify(mockUsers));
  }
  
  if (!localStorage.getItem('mockLibraries')) {
    const mockLibraries = [
      { id: '1', name: 'Research Papers', userId: '1' },
      { id: '2', name: 'Articles to Read', userId: '1' },
      { id: '3', name: 'Favorites', userId: '1' }
    ];
    localStorage.setItem('mockLibraries', JSON.stringify(mockLibraries));
  }
  
  if (!localStorage.getItem('mockArticles')) {
    localStorage.setItem('mockArticles', JSON.stringify({}));
  }
}

// Initialize mock data on load
initializeMockData();

const apiClient = {
  async login(email, password) {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('mockUsers') || '[]');
    
    // Find user with matching email and password
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    // Return a mock token and user info
    return {
      token: `mock-token-${user.id}`,
      refreshToken: `mock-refresh-token-${user.id}`,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    };
  },

  async getArticleMetadata(doi) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock article data based on DOI
    const mockArticles = {
      '10.1186/s40323-025-00306-5': {
        doi: '10.1186/s40323-025-00306-5',
        title: 'A new method for analyzing mechanical properties of materials',
        authors: ['John Smith', 'Jane Doe', 'Robert Johnson'],
        journal: 'Advances in Mechanical Engineering',
        year: 2025,
        abstract: 'This paper presents a novel method for analyzing the mechanical properties of materials. The proposed approach combines experimental testing with computational modeling to provide accurate predictions of material behavior under various loading conditions. Our method demonstrates significant improvements in accuracy compared to existing techniques, with potential applications in aerospace, automotive, and civil engineering industries.'
      },
      '10.1038/nphys1170': {
        doi: '10.1038/nphys1170',
        title: 'Quantum entanglement in high-dimensional systems',
        authors: ['Alice Johnson', 'Bob Williams', 'Charlie Brown'],
        journal: 'Nature Physics',
        year: 2025,
        abstract: 'We demonstrate quantum entanglement in high-dimensional quantum systems, showing that entanglement can persist even in complex quantum states with multiple degrees of freedom. Our experimental results confirm theoretical predictions and open new possibilities for quantum information processing and quantum communication protocols.'
      }
    };
    
    // Return mock data if available, otherwise generate generic data
    if (mockArticles[doi]) {
      return mockArticles[doi];
    }
    
    // Generic article data
    return {
      doi: doi,
      title: `Article with DOI: ${doi}`,
      authors: ['Author 1', 'Author 2'],
      journal: 'Journal Name',
      year: 2025,
      abstract: 'This is a generic abstract for the article with DOI: ' + doi + '. In a real implementation, this would contain the actual abstract of the article.'
    };
  },

  async getLibraries() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Get libraries from localStorage
    const libraries = JSON.parse(localStorage.getItem('mockLibraries') || '[]');
    return libraries;
  },

  async addArticleToLibrary(libraryId, doi) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Get existing articles
    const articles = JSON.parse(localStorage.getItem('mockArticles') || '{}');
    
    // Initialize library if it doesn't exist
    if (!articles[libraryId]) {
      articles[libraryId] = [];
    }
    
    // Add article if it's not already in the library
    if (!articles[libraryId].find(article => article.doi === doi)) {
      articles[libraryId].push({
        doi: doi,
        addedAt: new Date().toISOString()
      });
      
      // Save back to localStorage
      localStorage.setItem('mockArticles', JSON.stringify(articles));
    }
    
    return { success: true };
  }
};

// Make globally available
window.apiClient = apiClient;