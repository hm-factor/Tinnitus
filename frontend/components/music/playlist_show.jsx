import React from 'react';
import { Redirect } from 'react-router-dom';
import SongElementContainer from './song_element_container';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { playlist, songs, user, deletePlaylist } = this.props;
    if (!playlist) return <Redirect to="/" />;
    let songLis;

    if (playlist.songs) {
      songLis = playlist.songs.map( (song, idx) => {
        return (
          <li key={idx} className="song-li" onClick={() => this.props.playSong(song)}>
            <div className="song-li-left">
              <div className="song-li-note">
                <i className="fas fa-music"></i>
              </div>
                <SongElementContainer id={song.song_id} />
            </div>
          </li>
        );
      });
    };

    return (
      <div className="playlist-show-page">
        <div className="playlist-show-left">
          <div className="playlist-photo">
            <i className="fas fa-deaf"></i>
          </div>
          <p className="playlist-title">{playlist.title}</p>
          <p className="playlist-author">curated by: {playlist.author_id}</p>
          <button className="playlist-play-btn">PLAY</button>
          <hr />
          <button onClick={() => deletePlaylist(playlist.id)} className="playlist-delete-btn">DELETE</button>
          <p className="playlist-song-num">2019 - {Object.values(playlist.songs).length} songs</p>
        </div>
        <div className="playlist-show-right">
          <ul className="playlist-show-ul">{songLis}</ul>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;