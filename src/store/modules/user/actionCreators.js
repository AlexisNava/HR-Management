import { LOG_IN, LOG_OUT } from './actions';

export const logIn = dataUser => ({
  type: LOG_IN,
  payload: dataUser,
});

export const logOut = () => ({
  type: LOG_OUT,
});
