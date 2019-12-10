import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from '../components/nav_bar/nav_bar_container';

const App = () => (
  <>
    <h1>tinnitus</h1>
    <NavBarContainer/>

    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </>
);


export default App;