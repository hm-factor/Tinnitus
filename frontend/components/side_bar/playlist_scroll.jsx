import React from 'react';
import { NavLink } from 'react-router-dom';
// import PlaylistDropdown from './playlist_dropdown_container';
import { PlaylistShowContainer } from '../../components/music/playlist_show_container';

class PlaylistScroll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      dropX: "",
      dropY: ""
    };

    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleRightClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      hidden: !this.state.hidden,
      dropX: e.pageX,
      dropY: e.pageY
    });
  };

  handleBlur(e) {
    if (!this.state.hidden) {
      this.setState({
        hidden: !this.state.hidden,
        dropX: "",
        dropY: ""
      });
    };
  };
  
  render () {
    const { userPlaylistIds, playlists } = this.props;

    if (!userPlaylistIds) return null;
    let playlistLis = userPlaylistIds.map( playlistId => {
      return (
        <NavLink
          onContextMenu={this.handleRightClick}
          onBlur={this.handleBlur}
          to={`/playlists/${playlistId}`}
          className="playlist-link"
          key={playlistId}
        >
          <li className="playlist-li">
            {playlists[playlistId].title}
            {/* <PlaylistDropdown
              playlistId={playlistId}
              hidden={this.state.hidden}
              dropX={this.state.dropX}
              dropY={this.state.dropY}
            /> */}
          </li>
        </NavLink>
      );
    })

    return (
      <div className="scroll-container">
        <ul className="playlist-ul">
          {playlistLis}
        </ul>
      </div>
    )
  }
}

export default PlaylistScroll;