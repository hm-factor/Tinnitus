import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from '../components/nav_bar/nav_bar_container';

const App = () => (
  <div className="main-cont">
    <div className="side-bar">
      <h1 className="title">
        {/* <Link to='/'>tinnitus</Link> */}
        <NavLink activeClassName='title' to='/'>tinnitus</NavLink>
      </h1>
    </div>

    <div className="nav-cont">
      <NavBarContainer />
    </div>

    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);


export default App;