import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container";
import SideBarContainer from '../side_bar/side_bar_container';
import MusicPlayerContainer from '../music_player/music_player_container';

import { Route, Link, Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../../util/route_util';
import PlaylistShowContainer from "../music/playlist_show_container";
// import SongIndexContainer from '../../components/music/song_index_container';

const MainPageContainer = state => {
  // let collectionSongs;
  // if (state.history.location.pathname === "/collection") {
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
          <Switch />
            <AuthRoute path="/playlists/:id" component={PlaylistShowContainer} />
        </div>
      </div>
      <div className="main-bottom">
        <MusicPlayerContainer />
      </div>
    </div>
  );
}

export default MainPageContainer;