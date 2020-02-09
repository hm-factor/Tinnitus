import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistDropdown from './playlist_dropdown';
import { PlaylistShowContainer } from '../../components/music/playlist_show_container';

class PlaylistScroll extends React.Component {
  constructor(props) {
    super(props);

    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleRightClick(e) {
    // return <Redirect to={'/'} />
    e.preventDefault();
  }
  
  render () {
    const { userPlaylistIds, playlists } = this.props;
    if (!userPlaylistIds) return null;
    let playlistLis = userPlaylistIds.map( playlistId => {
      return (
        <li key={playlistId} className="playlist-li">
          <Link to={`/playlists/${playlistId}`} onContextMenu={this.handleRightClick} className="playlist-link">
            {playlists[playlistId].title}
            <PlaylistDropdown />
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