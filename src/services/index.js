import axios from 'axios';

export const logIn = async (email, password) => {
  const response = await axios.post('http://0.0.0.0:4000/api/auth/login', {
    email,
    password,
  });

  if (response && response.data && response.data.data) {
    return response.data.data;
  }

  return response;
};
