/**
 * Responsible for connecting with the API
 */

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:2000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
});

export default {
  getVeggies() {
    return apiClient.get('/veggies');
  },
  updateVeggie(veggie) {
    return apiClient.put('/veggies/' + veggie.id, veggie);
  }
};
