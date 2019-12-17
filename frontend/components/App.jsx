import React from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import ArtistShowContainer from '../components/music/artist_show_container'

import MainpageContainer from '../components/main_page/main_page_container';

const App = () => (
  <HashRouter>
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/api/artists/:artistId" component={ArtistShowContainer} />
      <Route path="/" component={MainpageContainer} />
    </Switch>
  </HashRouter>
);


export default App;