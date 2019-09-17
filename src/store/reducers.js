import { combineReducers } from 'redux';

// Reducers
import user from './modules/user/reducer';
import notification from './modules/notification/reducer';

const rootReducer = combineReducers({
  user,
  notification,
});

export default rootReducer;
