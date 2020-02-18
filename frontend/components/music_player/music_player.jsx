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

        </div>
        <div className="right-side-musicplayer">
          <i></i>
        </div>
      </div>
    )
  }
}

export default MusicPlayer;