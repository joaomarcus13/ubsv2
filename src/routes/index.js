import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/Login/loginPage';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home/homePage';

export default () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Switch>
      {isLoggedIn ? (
        <Route exact path="/" component={Home} />
      ) : (
        <Route exact path="/login" component={Login} />
      )}
      <Redirect from="*" to="/" />
    </Switch>
  );
};
