import React from 'react';
import { connect } from 'react-redux';
import {  
  withRouter, 
  Redirect, 
  Route } from 'react-router-dom';

const msp = state => {
  return { logged_in: Boolean(state.session.currentUserId) };
};

const Auth = ({ component: Component, path, logged_in}) => (
  <Route
    path={path}
    render={props => {
      return logged_in ? <Redirect to="/" /> : <Component {...props} />;
      }
    }
  />
);

const Protected = ({ component: Component, path, logged_in }) => (
  <Route
    path={path}
    render={props => {
      return !logged_in ? <Redirect to="/signup" /> : <Component {...props} />;
    }}
  />
);

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));