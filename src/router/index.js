import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

// Utils
import theme from '../utils/MUITheme';

// Containers
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import LogIn from '../pages/LogIn';

const Router = () => {
  const token = useSelector(state => state.getIn(['user', 'token']));

  useEffect(() => {
    console.log('token', token);
  }, [token]);

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (token ? <Dashboard /> : <Redirect to="login" />)}
          />
          <Route path="/login" component={LogIn} />
          <Route component={NotFound} />
        </Switch>

        <CssBaseline />
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
