import React from 'react';
import { Link } from 'react-router-dom';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div>
        <div className="left-side-musicplayer musicplayer">
          <p className="song-title-musicplayer">Song Title</p>
          <i>Like</i>
          <p className="artist-musicplayer">Artist</p>
        </div>
        <div className="middle-musicplayer musicplayer">

        </div>
        <div className="right-side-musicplayer musicplayer">

        </div>
      </div>
    )
  }
}

export default MusicPlayer;