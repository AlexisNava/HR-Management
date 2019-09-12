import { createStore } from 'redux';
import { Map } from 'immutable';

// Utils
import RootReducer from '../reducers';

function ConfigureStore() {
  const initialState = Map();
  const store = createStore(RootReducer, initialState);

  return store;
}

export default ConfigureStore;
