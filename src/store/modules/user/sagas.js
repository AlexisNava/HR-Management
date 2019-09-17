import { takeLatest } from 'redux-saga/effects';

// Actions
import { LOG_IN } from './actions';

function* logInRequest() {}

export function* logIn() {
  yield takeLatest(LOG_IN, logInRequest);
}
