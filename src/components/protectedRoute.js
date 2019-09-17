import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {
  const user = useSelector(state => state.user);
  const isLogged = useSelector(state => state.user.get('isLogged'));

  console.log('user', user);
  console.log('isLogged', isLogged);

  if (isLogged) {
    return <Route {...rest} component={Component} />;
  }

  return <Redirect to="/login" />;
}

export default ProtectedRoute;
