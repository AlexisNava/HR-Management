import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {
  const isLogged = useSelector(state => state.user.get('isLogged'));

  if (isLogged) {
    return <Route {...rest} component={Component} />;
  }

  return <Redirect to="/login" />;
}

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default ProtectedRoute;
