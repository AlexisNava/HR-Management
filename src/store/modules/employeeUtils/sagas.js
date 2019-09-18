import { call, put, select, takeLatest } from 'redux-saga/effects';

// Actions
import {
  REQUEST_TEAMS_EMPLOYEES,
  REQUEST_ADD_POSITION,
  REQUEST_ADD_TEAM,
  REQUEST_POSITIONS,
  REQUEST_TEAMS,
} from './actions';

// Services
import {
  getTeamsEmployees,
  addPosition,
  addTeam,
  getAllPositions,
  getAllTeams,
} from '../../../services';

// Action Creators
import {
  requestTeamsEmployeesSuccess,
  requestPositionsSuccess,
  requestTeamsSuccess,
} from './actionCreators';
import { showNotification } from '../notification/actionCreators';
import { logOut } from '../user/actionCreators';

function* callTeamsEmployees() {
  const token = yield select(state => state.user.get('token'));

  try {
    const response = yield call(getTeamsEmployees, token);

    yield put(requestTeamsEmployeesSuccess({ teamsEmployees: response }));
  } catch (error) {
    if (
      error &&
      error.data &&
      error.data.errorMessage &&
      error.data.errorMessage === 'jwt expired'
    ) {
      yield put(showNotification({ message: 'Session Expired' }));
      yield put(logOut());
    }

    yield put(
      showNotification({ message: "Can't load your teams. Try later." }),
    );
  }
}

export function* watcherTeamsEmployees() {
  yield takeLatest(REQUEST_TEAMS_EMPLOYEES, callTeamsEmployees);
}

function* callAddPosition({ positionName }) {
  const token = yield select(state => state.user.get('token'));

  try {
    yield call(addPosition, positionName, token);

    yield put(
      showNotification({ message: 'Added new position successfully.' }),
    );
  } catch (error) {
    if (
      error &&
      error.data &&
      error.data.errorMessage &&
      error.data.errorMessage === 'jwt expired'
    ) {
      yield put(showNotification({ message: 'Session Expired' }));
      yield put(logOut());
    }

    yield put(
      showNotification({
        message:
          'Failure trying to add a new position. Verify your information.',
      }),
    );
  }
}

export function* watcherAddPosition() {
  yield takeLatest(REQUEST_ADD_POSITION, callAddPosition);
}

function* callAddTeam({ teamName }) {
  const token = yield select(state => state.user.get('token'));

  try {
    yield call(addTeam, teamName, token);

    yield put(showNotification({ message: 'Added new team successfully.' }));
  } catch (error) {
    if (
      error &&
      error.data &&
      error.data.errorMessage &&
      error.data.errorMessage === 'jwt expired'
    ) {
      yield put(showNotification({ message: 'Session Expired' }));
      yield put(logOut());
    }

    yield put(
      showNotification({
        message: 'Failure trying to add a new team. Verify your information.',
      }),
    );
  }
}

export function* watcherAddTeam() {
  yield takeLatest(REQUEST_ADD_TEAM, callAddTeam);
}

function* callGetAllPositions() {
  const token = yield select(state => state.user.get('token'));

  try {
    const response = yield call(getAllPositions, token);

    yield put(requestPositionsSuccess({ positions: response }));
  } catch (error) {
    if (
      error &&
      error.data &&
      error.data.errorMessage &&
      error.data.errorMessage === 'jwt expired'
    ) {
      yield put(showNotification({ message: 'Session Expired' }));
      yield put(logOut());
    }

    yield put(
      showNotification({
        message: 'Failure trying to get all the positions.',
      }),
    );
  }
}

export function* watcherGetAllPositions() {
  yield takeLatest(REQUEST_POSITIONS, callGetAllPositions);
}

function* callGetAllTeams() {
  const token = yield select(state => state.user.get('token'));

  try {
    const response = yield call(getAllTeams, token);

    yield put(requestTeamsSuccess({ teams: response }));
  } catch (error) {
    if (
      error &&
      error.data &&
      error.data.errorMessage &&
      error.data.errorMessage === 'jwt expired'
    ) {
      yield put(showNotification({ message: 'Session Expired' }));
      yield put(logOut());
    }

    yield put(
      showNotification({
        message: 'Failure trying to get all the positions.',
      }),
    );
  }
}

export function* watcherGetAllTeams() {
  yield takeLatest(REQUEST_TEAMS, callGetAllTeams);
}
