import { all } from 'redux-saga/effects';

// Sagas
import { logInRequestWatcher } from './modules/user/sagas';
import { watcherEmployeeUtils } from './modules/employeeUtils/sagas';

function* rootSaga() {
  yield all([logInRequestWatcher(), watcherEmployeeUtils()]);
}

export default rootSaga;
