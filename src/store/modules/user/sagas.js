import { takeLatest, put, call } from 'redux-saga/effects';

// Actions
import { LOG_IN } from './actions';

// Action Creators
import { logInSuccess } from './actionCreators';
import { showNotification } from '../notification/actionCreators';

// Services
import { logIn } from '../../../services';

function* logInRequest({ email, password }) {
  try {
    const response = yield call(logIn, email, password);

    yield put(logInSuccess(response));
  } catch (error) {
    yield put(showNotification({ message: 'Incorrect email or password.' }));
  }
}

export function* logInRequestWatcher() {
  yield takeLatest(LOG_IN, logInRequest);
}
