import React from 'react';
import { Link } from 'react-router-dom';
import Tone from 'tone';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.pressAudioPlayer = this.pressAudioPlayer.bind(this);
  };

  componentDidMount() {
    this.props.fetchSongs();
  };

  pressAudioPlayer() {
    console.log('play');
  //   if (player.state === 'started') {
  //     player.stop();
  //   } else if (player.state === 'stopped') {
  //     player.start();
  //   };
  };

  render () {
    let song = this.props.songs[1809];

    if (song === undefined) {
      return <div></div>;
    } else {
      // const buffer = new Tone.Buffer(song.songUrl, () => {
      //   buffer.set(song.songUrl);
      // });
      // const player = new Tone.Player(song.songUrl).toMaster();

      let playButton = "play";
      let volumeControl = "up";

      // if (player.state === "started") {
      //   playButton = "pause";
      // } else if (player.state === "stopped") {
      //   playButton = "play";
      // }

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
            <div className="middle-controls">
              <i className="fas fa-random"></i>
              <i className="fas fa-step-backward"></i>
              <i
                className={`fas fa-${playButton}`}
                onClick={this.pressAudioPlayer()}
              ></i>
              <i className="fas fa-step-forward"></i>
              <i className="fas fa-redo-alt"></i>
            </div>
            <div className="progress-bar">
              <input type="range" min="0" max="100" className="progress-slider"/>
            </div>
          </div>
          <div className="right-side-musicplayer">
            <div className="right-controls">
              <i className={`fas fa-volume-${volumeControl}`}></i>
            </div>
            <div className="volume-bar">
              <input type="range" min="0" max="100" className="volume-slider"/>
            </div>
          </div>
        </div>
      );
    };
  };
};

export default MusicPlayer;