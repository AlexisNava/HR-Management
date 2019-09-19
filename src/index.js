import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// React App
import Router from './router';

// Store
import ConfigureStore from './store';

// Styles
import './utils/styles/general.css';

const { store, persistor } = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<h1>loading...</h1>} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
