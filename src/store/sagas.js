import { all } from 'redux-saga/effects';

// Sagas
import { watcherLogInRequest } from './modules/user/sagas';
import { watcherEmployeeUtils } from './modules/employeeUtils/sagas';

function* rootSaga() {
  yield all([watcherLogInRequest(), watcherEmployeeUtils()]);
}

export default rootSaga;
