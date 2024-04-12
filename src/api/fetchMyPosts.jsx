// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/myposts';

export const fetchMyPosts = async (userId) => {
  try {
    const response = await axios.post(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'userid',
      },
      body: userId,
    });
    return response.data.mytravelnotes;
  } catch (error) {
    console.error('Error fetching myposts:', error);
    throw error;
  }
};