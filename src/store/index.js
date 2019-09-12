import { createStore, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import CreateSagaMiddleware from 'redux-saga';

import RootReducer from './reducers';
import RootSaga from './sagas';

function ConfigureStore() {
  const initialState = Map();
  const sagaMiddleware = CreateSagaMiddleware();
  const store = createStore(
    RootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(RootSaga);

  return store;
}

export default ConfigureStore;
