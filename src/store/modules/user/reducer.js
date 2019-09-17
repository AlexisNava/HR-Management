// Actions
import { LOG_IN_SUCCESS, LOG_OUT } from './actions';

import { fromJS } from 'immutable';

const initialState = fromJS({
  token: null,
  id: null,
  isAdmin: null,
  name: null,
  lastName: null,
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return state
        .set('token', action.payload.token)
        .set('id', action.payload.personalInformation.id)
        .set('isAdmin', action.payload.personalInformation.isAdmin)
        .set('name', action.payload.personalInformation.name)
        .set('lastName', action.payload.personalInformation.lastName);
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
