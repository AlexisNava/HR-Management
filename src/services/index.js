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

export const getTeams = async token => {
  const response = await axios.get('http://0.0.0.0:4000/api/team', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response && response.data && response.data.data) {
    return response.data.data;
  }

  return response;
};
