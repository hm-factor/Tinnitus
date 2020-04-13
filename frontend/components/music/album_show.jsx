import React from 'react';
import { Redirect } from "react-router-dom";
import SongElementContainer from './song_element_container';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.playAlbum = this.playAlbum.bind(this);
  }

  playAlbum() {
    let { album, songs, playSong, setQueue } = this.props;

    let newQueue = [];
    Object.values(songs).forEach( song => {
      if (song.album_id === album.id) {
        newQueue.push(song)
      };
    });

    let newCurrent = newQueue.shift();

    playSong(newCurrent);
    setQueue(newQueue);
  }

  render() {
    let { album, songs, user } = this.props;
    if (!album) return <Redirect to='/' />;
    const albumSongLis = Object.values(songs).map( song => {
      if (song.album_id === album.id) {
        return (
          <li
            key={song.id}
            className="song-li"
            onClick={() => this.props.playSong(song)}
          >
            <div className="song-li-left">
              <div className="song-li-note">
                <i className="fas fa-music"></i>
              </div>
              <SongElementContainer id={song.id} />
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
      }
    })

    return (
      <div className="playlist-show-page">
        <div className="playlist-show-left">
          <div className="playlist-photo">
            <i className="fas fa-deaf"></i>
          </div>
          <p className="playlist-title">{album.title}</p>
          <p className="playlist-author">by: {album.artist_id}</p>
          <button className="playlist-play-btn" onClick={this.playAlbum}>PLAY</button>
        </div>
        <div className="playlist-show-right">
          <ul className="playlist-show-ul">{albumSongLis}</ul>
        </div>
      </div>
    );
  }
}

export default AlbumShow;