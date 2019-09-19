import { LOG_IN, LOG_OUT, LOG_IN_SUCCESS } from './actions';

export const logIn = (email, password) => ({
  type: LOG_IN,
  email,
  password,
});

export const logInSuccess = payload => ({
  type: LOG_IN_SUCCESS,
  payload,
});

export const logOut = () => ({
  type: LOG_OUT,
});
