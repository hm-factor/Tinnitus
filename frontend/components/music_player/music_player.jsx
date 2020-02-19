import React from 'react';
import { Link } from 'react-router-dom';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="musicplayer">
        <div className="left-side-musicplayer">
          <div className="title-artist">
            <p className="song-title-musicplayer">Song Title</p>
            <p className="artist-musicplayer">Artist</p>
          </div>
          <i className="far fa-heart"></i>
          {/* <i className="fas fa-heart"></i> */}
        </div>
        <div className="middle-musicplayer">
          <i className="fas fa-random"></i>
          <i className="fas fa-step-backward"></i>
          <i className="fas fa-play"></i>
          <i className="fas fa-pause"></i>
          <i className="fas fa-step-forward"></i>
          <i className="fas fa-repeat"></i>
        </div>
        <div className="right-side-musicplayer">
          <i className="fas fa-volume-up"></i>
          <i className="fas fa-volume-down"></i>
          <i className="fas fa-volume-off"></i>
          <i className="fas fa-volume-mute"></i>
        </div>
      </div>
    )
  }
}

export default MusicPlayer;