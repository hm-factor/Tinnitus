import React from 'react';
import { connect } from 'react-redux';
import NavBarContainer from "../nav_bar/nav_bar_container";
import SideBarContainer from '../side_bar/side_bar_container';
import MusicPlayerContainer from '../music_player/music_player_container';

import { Route, Link} from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../../util/route_util';
import PlaylistShowContainer from "../music/playlist_show_container";
// import SongIndexContainer from '../../components/music/song_index_container';

const msp = (state) => {
  return{};
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
              {/* <Route to='/' component={SideBarContainer} /> */}
            </div>
          </div>
          <div className="main-right">
            <div className="nav-cont">
              <NavBarContainer />
              {/* <Route to='/' component={NavBarContainer} /> */}
            </div>
            <div className="playlist-show" style={rightStyle}>
              <Route path="/playlists/:id" component={PlaylistShowContainer} />
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

export default connect(msp, null)(MainPageContainer);