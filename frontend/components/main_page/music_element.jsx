import React from 'react';
import { NavLink } from 'react-router-dom';

export default class MusicElement extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    let { authoredPlaylists, allPlaylists } = this.props;
    let playlistLis;
    if (authoredPlaylists) {
      playlistLis = authoredPlaylists.map( playlistId => {
        return (
          <div className="playlist-items" key={playlistId}>
            <div className="playlist-item-graphic">
              <i className="fas fa-deaf playlist-item-deaf"></i>
            </div>
            <div className="playlist-item-bottom">
              <NavLink to={`/playlists/${playlistId}`} className="playlist-item-title">
                {allPlaylists[playlistId].title}
              </NavLink>
              <button onClick={this.props.playSong} className="playlist-item-play">
                <i className="fas fa-play playlist-btn-icon"></i>
              </button>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <div className="playlist-items-container">
          <div className="playlist-item-container-title">Your Playlists</div>
          <div className="playlist-item-row">{playlistLis}</div>
        </div>
      </div>
    );
  }
}