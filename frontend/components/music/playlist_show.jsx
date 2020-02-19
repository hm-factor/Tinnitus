import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    const { playlist, songs, user } = this.props;
    if (!playlist) return null;
    const songLis = Object.values(songs).map( song => {
      return (
        <li key={song.id} className="song-li">
          <div className="song-li-left">
            <div className="song-li-note">
              <i className="fas fa-music"></i>
            </div>
            <div className="song-info">
              <div className="song-li-title">{song.title}</div>
              <div className="song-li-artist">{song.artist_id}</div>
            </div>
          </div>
          <div className="song-li-right">
            <div className="song-li-options">
              <div className="song-li-ellipsis">
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="song-li-time">0:00</div>
            </div>
          </div>
        </li>
      );
    })
    return (
      <div className="playlist-show-page">
        <div className="playlist-show-left">
          <div className="playlist-photo">
            <i className="fas fa-deaf"></i>
          </div>
          <p className="playlist-title">{playlist.title}</p>
          <p className="playlist-author">curated by: {playlist.author_id}</p>
          <button className="playlist-play-btn">PLAY</button>
          <p className="playlist-song-num">2019 - {Object.values(songs).length} songs</p>
        </div>
        <div className="playlist-show-right">
          <ul className="playlist-show-ul">{songLis}</ul>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;