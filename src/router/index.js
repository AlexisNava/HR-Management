import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Containers
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import LogIn from '../pages/LogIn';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={LogIn} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
