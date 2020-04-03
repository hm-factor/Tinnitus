import React from 'react';
import { NavLink } from 'react-router-dom';

export default class MusicElement extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    let { authoredPlaylists, allPlaylists } = this.props;

    let playlistLis;
    let albumLis;

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
    };

    if (this.props.albums) {
      let {albums} = this.props;
      albumLis = Object.keys(albums).map( albumId => {
        return (
          <div className="albums-items" key={albumId}>
            <div className="albums-item-graphic">
              <i className="fas fa-deaf albums-item-deaf"></i>
            </div>
            <div className="albums-item-bottom">
              <NavLink to={`/albums/${albumId}`} className="albums-item-title">
                {albums[albumId].title}
              </NavLink>
              <button onClick={this.props.playSong} className="albums-item-play">
                <i className="fas fa-play albums-btn-icon"></i>
              </button>
            </div>
          </div>
        )
      })
    }

    return (
      <div>
        <div className="playlist-items-container">
          <div className="playlist-item-container-title">Your Playlists</div>
          <div className="playlist-item-row">{playlistLis}</div>
        </div>
        <div className="albums-items-container">
          <div className="albums-item-container-title">Albums</div>
          <div className="albums-item-row">{albumLis}</div>
        </div>
      </div>
    );
  }
}