import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Containers
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import LogIn from '../pages/LogIn';

// Components
import ProtectedRoute from '../components/protectedRoute';

// Styles
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

// Utils
import theme from '../utils/MUITheme';

const Router = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
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
