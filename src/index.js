import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Router from './router';
import ConfigureStore from './store';

const { store, persistor } = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<h1>loading...</h1>} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
