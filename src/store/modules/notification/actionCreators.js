import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './actions';

export const showNotification = payload => ({
  type: SHOW_NOTIFICATION,
  payload,
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
