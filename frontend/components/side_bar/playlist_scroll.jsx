import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistDropdown from './playlist_dropdown';
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
    }
  };
  
  render () {
    const { userPlaylistIds, playlists } = this.props;
    if (!userPlaylistIds) return null;
    let playlistLis = userPlaylistIds.map( playlistId => {
      return (
        <li
          key={playlistId}
          className="playlist-li"
          onContextMenu={this.handleRightClick}
          onBlur={this.handleBlur}
        >
          <Link to={`/playlists/${playlistId}`} className="playlist-link">
            {playlists[playlistId].title}
            <PlaylistDropdown
              hidden={this.state.hidden}
              dropX={this.state.dropX}
              dropY={this.state.dropY}
            />
          </Link>
        </li>
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