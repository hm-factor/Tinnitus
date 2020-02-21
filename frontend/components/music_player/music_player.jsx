import React from 'react';
import { Link } from 'react-router-dom';
import Tone from 'tone';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.pressAudioPlayer = this.pressAudioPlayer.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  pressAudioPlayer() {
    let song = this.props.songs[1809];
    const player = new Tone.Player({
      url: song.songUrl,
      autostart: true
    }).toMaster();

    if (player.state === 'started') {
      player.stop();
    } else if (player.state === 'stopped') {
      player.start();
    };
  };

  render () {
    let song = this.props.songs[1809];

    let playbutton = 'play';

    if (player.state === 'started') {
      let playButton = 'pause';
    } else if (player.state === 'stopped') {
      let playButton = 'play';
    };

    if (song === undefined) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className="musicplayer">
          <div className="left-side-musicplayer">
            <div className="title-artist">
              <p className="song-title-musicplayer">{song.title}</p>
              <p className="artist-musicplayer">{song.artist_id}</p>
            </div>
            <i className="far fa-heart"></i>
            {/* <i className="fas fa-heart"></i> */}
          </div>
          <div className="middle-musicplayer">
            {/* <i className="fas fa-random"></i>
            <i className="fas fa-step-backward"></i> */}
            <i className={`fas fa-${playButton}`} onClick={this.pressAudioPlayer}></i>
            {/* <i className="fas fa-pause"></i>
            <i className="fas fa-step-forward"></i>
            <i className="fas fa-repeat"></i> */}
          </div>
          <div className="right-side-musicplayer">
            <i className="fas fa-volume-up"></i>
            <i className="fas fa-volume-down"></i>
            <i className="fas fa-volume-off"></i>
            <i className="fas fa-volume-mute"></i>
          </div>
        </div>
    )}
  }
}

export default MusicPlayer;