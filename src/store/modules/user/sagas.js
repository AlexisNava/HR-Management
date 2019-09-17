import { takeLatest, put, call } from 'redux-saga/effects';

// Actions
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from './actions';

// Services
import { logIn } from '../../../services';

function* logInRequest({ email, password }) {
  try {
    const response = yield call(logIn, email, password);
    yield put({ type: LOG_IN_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: LOG_IN_FAILURE });
  }
}

export function* logInRequestWatcher() {
  yield takeLatest(LOG_IN, logInRequest);
}
