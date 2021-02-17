import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from './Auth';
const AuthenticatedRoute = props => {
  console.log(props);
  if (isLoggedIn()) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};
export default AuthenticatedRoute;
