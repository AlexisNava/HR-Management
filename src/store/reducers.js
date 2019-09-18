import { combineReducers } from 'redux';

// Reducers
import user from './modules/user/reducer';
import notification from './modules/notification/reducer';
import employeeUtils from './modules/employeeUtils/reducer';

const rootReducer = combineReducers({
  user,
  notification,
  employeeUtils,
});

export default rootReducer;
