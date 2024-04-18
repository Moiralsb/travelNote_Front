// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/searchtrips';

export const searchTrips = async (query) => {
  try {
    const response = await axios.post(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'searchKey',
      },
      body: query,
    });
    return response.data.searchtravelnotes;
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
};