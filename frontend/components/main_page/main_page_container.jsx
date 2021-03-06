import React from 'react';
import { connect } from 'react-redux';
import NavBarContainer from "../nav_bar/nav_bar_container";
import SideBarContainer from '../side_bar/side_bar_container';
import MusicPlayerContainer from '../music_player/music_player_container';
import { fetchAlbums } from "../../actions/album_actions";
import { fetchArtists } from "../../actions/artist_actions";

import { Route, Link, Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../../util/route_util';
import PlaylistShowContainer from "../music/playlist_show_container";
import AlbumShowContainer from '../music/album_show_container';
import MusicElementContainer from "./music_element_container";

// import SongIndexContainer from '../../components/music/song_index_container';

const msp = (state) => {
  return{};
}

const mdp = dispatch => {
  return {
    fetchAlbums: albums => dispatch(fetchAlbums(albums)),
    fetchArtists: artists => dispatch(fetchArtists(artists))
  }
}

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { height: (window.innerheight - 90), otherHeight: (window.innerHeight - 166) };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  // let collectionSongs;
  // if (state.history.location.pathname === "/collection") {
  //   collectionSongs = <SongIndexContainer />
  // }

  componentDidMount() {
    this.props.fetchAlbums();
    this.props.fetchArtists();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ height: (window.innerHeight - 90) });
  }

  render() {
    let { height, otherHeight } = this.state;
    let newHeight = height + 'px', otherNewHeight = otherHeight + 'px';
    let topStyle = {
      height: newHeight
    }

    let rightStyle = {
      height: otherNewHeight
    }

    return (
      <div className="main-cont">
        <div className="main-top" style={topStyle}>
          <div className="side-bar">
            <div className="side-bar-nav">
              <SideBarContainer />
            </div>
          </div>
          <div className="main-right">
            <div className="nav-cont">
              <NavBarContainer />
            </div>
            <div>
              <Route exact path="/" component={MusicElementContainer} />
            </div>
            <div className="playlist-show" style={rightStyle}>
              <Switch >
                <Route path="/playlists/:id" component={PlaylistShowContainer} />
                <Route path="/albums/:id" component={AlbumShowContainer} />
              </Switch>
            </div>
          </div>
        </div>
        <div className="main-bottom">
          <MusicPlayerContainer />
        </div>
      </div>
    );
  }
}

export default connect(msp, mdp)(MainPageContainer);