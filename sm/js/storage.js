// js/utils/storage.js
const storageHelper = {
  async get(key) {
    const result = await chrome.storage.local.get(key);
    return result[key];
  },

  async set(key, value) {
    await chrome.storage.local.set({ [key]: value });
  },

  async remove(key) {
    await chrome.storage.local.remove(key);
  },

  async clear() {
    await chrome.storage.local.clear();
  },

  async isLoggedIn() {
    const token = await this.get('authToken');
    return !!token;
  }
};