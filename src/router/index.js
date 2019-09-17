import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Containers
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import LogIn from '../pages/LogIn';

// Styles
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

// Utils
import theme from '../utils/MUITheme';

const Router = () => {
  // const isAdmin = useSelector(state => state.getIn(['user', 'isAdmin']));

  // useEffect(() => {
  //   console.log('isAdmin', isAdmin);
  // }, [isAdmin]);
  const state = useSelector(state => state);
  console.log('state', state);

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Dashboard} isAdmin={false} />
          <Route path="/login" component={LogIn} isAdmin={false} />
          <Route component={NotFound} />
        </Switch>

        <CssBaseline />
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
