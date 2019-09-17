import { LOG_IN, LOG_OUT } from './actions';

export const logIn = (email, password) => ({
  type: LOG_IN,
  email,
  password,
});

export const logOut = () => ({
  type: LOG_OUT,
});
