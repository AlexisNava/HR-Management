import { all } from 'redux-saga/effects';

// Sagas
import { logInRequestWatcher } from './modules/user/sagas';

function* rootSaga() {
  yield all([logInRequestWatcher()]);
}

export default rootSaga;
