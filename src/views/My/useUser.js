// useUser.js
import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('userToken');

    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
        console.log(decodedUser);
      } catch (error) {
        console.error('Error decoding token:', error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return { user, loading };
};

export default useUser;