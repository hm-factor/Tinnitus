import React from 'react';
import { Link } from 'react-router-dom';
import Tone from 'tone';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playClicked: false,
      likeClicked: false,
      muteClicked: false
    }

    this.pressAudioPlayer = this.pressAudioPlayer.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike= this.handleLike.bind(this);
    this.handleMute= this.handleMute.bind(this);
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
      playClicked: !this.state.playClicked
    });
  };

  handleLike(e) {
    this.setState({
      likeClicked: !this.state.likeClicked
    });
  };

  handleMute(e) {
    this.setState({
      muteClicked: !this.state.muteClicked
    });
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

      let { playClicked, likeClicked, muteClicked } = this.state;

      let playing = playClicked ? "hidden" : "";
      let paused = playClicked ? "" : "hidden";

      let unliked = likeClicked ? "hidden" : "";
      let liked = likeClicked ? "" : "hidden";

      let unmuted = muteClicked ? "hidden" : "";
      let muted = muteClicked ? "" : "hidden";

      let songStart = '0:00', songEnd = '0:00';

      return (
        <div className="musicplayer">
          <div className="left-side-musicplayer">
            <div className="title-artist">
              <p className="song-title-musicplayer">{song.title}</p>
              <p className="artist-musicplayer">{song.artist_id}</p>
            </div>
            <div id="like-btn" onClick={this.handleLike}>
              <i className={`far fa-heart ${unliked}`}></i>
              <i className={`fas fa-heart ${liked}`}></i>
            </div>
          </div>

          <div className="middle-musicplayer">
            <div className="middle-controls">
              <button id="random-btn">
                <i className="fas fa-random"></i>
              </button>
              <i className="fas fa-step-backward"></i>
              <div id="play-pause" onClick={this.handlePlay}>
                <i className={`fas fa-play ${playing}`}></i>
                <i className={`fas fa-pause ${paused}`}></i>
              </div>
              <i className="fas fa-step-forward"></i>
              <button id="redo-btn">
                <i className="fas fa-redo-alt"></i>
                <div className="dot"></div>
              </button>
            </div>
            <div className="progress-bar">
              <p className="play-time">{songStart}</p>
              <input
                type="range"
                min="0"
                max="100"
                className="progress-slider"
              />
              <p className="play-time">{songEnd}</p>
            </div>
          </div>

          <div className="right-side-musicplayer">
            <div className="right-controls" onClick={this.handleMute}>
              <i className={`fas fa-volume-up volume ${unmuted}`}></i>
              <i className={`fas fa-volume-mute volume ${muted}`}></i>
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