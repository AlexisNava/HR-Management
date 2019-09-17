import { combineReducers } from 'redux-immutable';

// Reducers
import user from './modules/user/reducer';

const rootReducer = combineReducers({ user });

export default rootReducer;
