import { call, put, select, takeLatest } from 'redux-saga/effects';

// Actions
import { REQUEST_TEAMS_EMPLOYEES } from './actions';

// Services
import { getTeamsEmployees } from '../../../services';

// Action Creators
import { requestTeamsEmployeesSuccess } from './actionCreators';
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

export function* watcherEmployeeUtils() {
  yield takeLatest(REQUEST_TEAMS_EMPLOYEES, callTeamsEmployees);
}
