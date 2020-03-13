import React from 'react';
import { Link } from 'react-router-dom';
import Tone from 'tone';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }

    this.pressAudioPlayer = this.pressAudioPlayer.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
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

  handlePlay(e) {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render () {
    let song = this.props.songs[1809];

    if (song === undefined) {
      return <div></div>;
    } else {
      // const buffer = new Tone.Buffer(song.songUrl, () => {
      //   buffer.set(song.songUrl);
      // });
      // const player = new Tone.Player(song.songUrl).toMaster();

      // if (player.state === "started") {
      //   playButton = "pause";
      // } else if (player.state === "stopped") {
      //   playButton = "play";
      // }

      let playing = this.state.isClicked ? "hidden" : "";
      let paused = this.state.isClicked ? "" : "hidden";

      return (
        <div className="musicplayer">
          <div className="left-side-musicplayer">
            <div className="title-artist">
              <p className="song-title-musicplayer">{song.title}</p>
              <p className="artist-musicplayer">{song.artist_id}</p>
            </div>
            <div>
              <i className="far fa-heart"></i>
            </div>
            {/* <i className="fas fa-heart"></i> */}
          </div>
          <div className="middle-musicplayer">
            <div className="middle-controls">
              <i className="fas fa-random"></i>
              <i className="fas fa-step-backward"></i>
              <div id="play-pause" onClick={this.handlePlay}>
                <i className={`fas fa-play ${playing}`}></i>
                <i className={`fas fa-pause ${paused}`}></i>
              </div>
              <i className="fas fa-step-forward"></i>
              <i className="fas fa-redo-alt"></i>
            </div>
            <div className="progress-bar">
              <input
                type="range"
                min="0"
                max="100"
                className="progress-slider"
              />
            </div>
          </div>
          <div className="right-side-musicplayer">
            <div className="right-controls">
              <i className="fas fa-volume-up"></i>
            </div>
            <div className="volume-bar">
              <input type="range" min="0" max="100" className="volume-slider" />
            </div>
          </div>
        </div>
      );
    };
  };
};

export default MusicPlayer;