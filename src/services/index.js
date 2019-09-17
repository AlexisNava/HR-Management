import axios from 'axios';

export const logIn = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:4000/api/auth/login', {
      email,
      password,
    });

    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return null;
  } catch (error) {
    throw error;
  }
};
