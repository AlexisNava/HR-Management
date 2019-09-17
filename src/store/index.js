import { createStore, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import CreateSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

import RootReducer from './reducers';
import RootSaga from './sagas';

function ConfigureStore() {
  const persistConfig = {
    transforms: [immutableTransform()],
    key: 'root',
    storage,
  };
  const persistedReducers = persistReducer(persistConfig, RootReducer);
  const sagaMiddleware = CreateSagaMiddleware();
  const store = createStore(persistedReducers, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);

  sagaMiddleware.run(RootSaga);

  return { store, persistor };
}

export default ConfigureStore;
