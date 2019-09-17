import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = useSelector(state => state.getIn(['user', 'token']));

  return (
    <Route
      {...rest}
      render={() => (token ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

export default ProtectedRoute;
