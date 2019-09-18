import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Containers
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import LogIn from '../pages/LogIn';

// Components
import ProtectedRoute from '../components/ProtectedRoute';
import Snackbar from '../components/Snackbar';

// Styles
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

// Utils
import theme from '../utils/MUITheme';

const Router = () => {
  const notificationIsVisible = useSelector(state =>
    state.notification.get('isVisible'),
  );
  const notificationMessage = useSelector(state =>
    state.notification.get('message'),
  );

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Snackbar
          isOpen={notificationIsVisible}
          message={notificationMessage}
        />

        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={LogIn} />
          <Route component={NotFound} />
        </Switch>

        <CssBaseline />
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
