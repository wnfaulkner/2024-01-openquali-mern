// users-api.js

import sendRequest from './send-request';
const BASE_URL = '/api/users'; // This is the base path of the Express route we'll define

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  // console.log(credentials)
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
