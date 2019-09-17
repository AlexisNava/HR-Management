import { fromJS } from 'immutable';

// Actions
import { LOG_IN_SUCCESS, LOG_OUT } from './actions';

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
        .set('id', action.payload.userInformation.id)
        .set('isAdmin', action.payload.userInformation.isAdmin)
        .set('name', action.payload.userInformation.name)
        .set('lastName', action.payload.userInformation.lastName);
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
