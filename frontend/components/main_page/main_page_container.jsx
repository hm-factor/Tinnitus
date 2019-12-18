import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container";
import SideBarContainer from '../side_bar/side_bar_container';

import { Route, Link} from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import ArtistShowContainer from "../music/artist_show_container";

const MainPageContainer = () => {
  return (
      <div className="main-cont">
        <div className="side-bar">
          <div className="side-bar-nav">
            <SideBarContainer />
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