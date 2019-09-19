import { fromJS } from 'immutable';

// Actions
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './actions';

const initialState = fromJS({
  isVisible: false,
  message: null,
});

const notification = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return state
        .set('isVisible', true)
        .set('message', action.payload.message);
    case HIDE_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
};

export default notification;
