import { all } from 'redux-saga/effects';

// Sagas
import { watcherLogInRequest } from './modules/user/sagas';
import {
  watcherTeamsEmployees,
  watcherAddPosition,
  watcherAddTeam,
} from './modules/employeeUtils/sagas';

function* rootSaga() {
  yield all([
    watcherLogInRequest(),
    watcherTeamsEmployees(),
    watcherAddPosition(),
    watcherAddTeam(),
  ]);
}

export default rootSaga;
