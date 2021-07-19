import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes, { bool, func } from 'prop-types';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route component={component} {...rest} />
  ) : (
    <Redirect to="/login" />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
