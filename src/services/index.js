import axios from 'axios';

// Utils
import { authService } from '../utils/URLServices';

export const logIn = async (email, password) => {
  const response = await axios.post(`${authService}/login`, {
    email,
    password,
  });

  return response;
};
