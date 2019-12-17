import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container";
import Logo from '../side_bar/logo';

import { Route, Link} from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import ArtistShowContainer from "../music/artist_show_container";

const MainPageContainer = () => {
  return (
      <div className="main-cont">
        <div className="side-bar">
          <div className="side-bar-nav">
            <Logo />
          </div>
        </div>

        <div className="nav-cont">
          <NavBarContainer />
        </div>

        {/* <div>
          <ArtistShowContainer />
        </div> */}
      </div>
  )
}

export default MainPageContainer;