import { all } from 'redux-saga/effects';

// Sagas
import { watcherLogInRequest } from './modules/user/sagas';
import {
  watcherTeamsEmployees,
  watcherAddPosition,
  watcherAddTeam,
  watcherGetAllPositions,
  watcherGetAllTeams,
  watcherAddEmployee,
} from './modules/employeeUtils/sagas';

function* rootSaga() {
  yield all([
    watcherLogInRequest(),
    watcherTeamsEmployees(),
    watcherAddPosition(),
    watcherAddTeam(),
    watcherGetAllPositions(),
    watcherGetAllTeams(),
    watcherAddEmployee(),
  ]);
}

export default rootSaga;
