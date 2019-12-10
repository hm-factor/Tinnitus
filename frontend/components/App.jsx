import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>tinnitus</h1>
    </header>

    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/login" component={LoginFormContainer} />
  </div>
);


export default App;