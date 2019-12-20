import React from 'react';
import { Link } from 'react-router-dom';
import { PlaylistShowContainer } from '../../components/music/playlist_show_container';

class PlaylistScroll extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { userPlaylistIds, playlists } = this.props;
    if (!userPlaylistIds) return null;
    let playlistLis = userPlaylistIds.map( playlistId => {
      return (
        <li key={playlistId} className="playlist-li">
          <Link to={`/playlists/${playlistId}`} className="playlist-link">
            {playlists[playlistId].title}
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