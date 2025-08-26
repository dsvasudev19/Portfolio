// js/utils/constants.js
const APP_NAME = 'Writem Smart Reader';
const APP_VERSION = '1.0.0';

const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  REFRESH_TOKEN: 'refreshToken',
  USER_DATA: 'userData',
  SETTINGS: 'settings'
};

const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  GET_USER: '/auth/me',
  GET_ARTICLE: '/articles/doi/:doi',
  GET_LIBRARIES: '/libraries',
  ADD_TO_LIBRARY: '/libraries/:id/articles',
};

const DOI_REGEX = /10\.\d{4,9}\/[-._;()/:A-Z0-9]+/gi;