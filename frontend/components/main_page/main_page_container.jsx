import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container";
import SideBarContainer from '../side_bar/side_bar_container';

import { Route, Link} from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../../util/route_util';
import PlaylistShowContainer from "../music/playlist_show_container";
// import SongIndexContainer from '../../components/music/song_index_container';

const MainPageContainer = state => {
  // let collectionSongs;
  // if (state.history.location.pathname === "/collection") {
  //   debugger
  //   collectionSongs = <SongIndexContainer />
  // }
  return (
    <div className="main-cont">
      <div className="side-bar">
        <div className="side-bar-nav">
          <SideBarContainer />
          {/* <Route to='/' component={SideBarContainer} /> */}
        </div>
      </div>
      <div className="main-right">
        <div className="nav-cont">
          <NavBarContainer />
          {/* <Route to='/' component={NavBarContainer} /> */}
        </div>

        <div className="playlist-show">
          <Route path="/playlists/:id" component={PlaylistShowContainer} />
        </div>
      </div>
    </div>
  );
}

export default MainPageContainer;