import { all } from 'redux-saga/effects';

// Sagas
import { watcherLogInRequest } from './modules/user/sagas';
import {
  watcherTeamsEmployees,
  watcherAddPosition,
  watcherAddTeam,
  watcherGetAllPositions,
} from './modules/employeeUtils/sagas';

function* rootSaga() {
  yield all([
    watcherLogInRequest(),
    watcherTeamsEmployees(),
    watcherAddPosition(),
    watcherAddTeam(),
    watcherGetAllPositions(),
  ]);
}

export default rootSaga;
