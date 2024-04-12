// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/deletemypost';

export const deleteMyPosts = async (travelId) => {
  try {
    const response = await axios.post(API_URL, {
        method: 'POST',
      headers: {
        'Content-Type': 'travelid',
      },
      body: travelId,
    });
    alert("游记删除成功");
    return response;
  } catch (error) {
    console.error('Error deleting myposts:', error);
    throw error;
  }
};