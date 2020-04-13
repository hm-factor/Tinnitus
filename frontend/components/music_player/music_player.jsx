import React from 'react';
import { Link } from 'react-router-dom';
import { formatTime } from '../../util/song_time_util';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: this.props.isPlaying,
      likeClicked: false,
      muteClicked: false,
      songTime: '0:00'
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.playNext = this.playNext.bind(this)
  };

  handlePlay(e) {
    e.preventDefault();
    let audioUnit = document.getElementById('audio');
    this.props.isPlaying ? audioUnit.pause() : audioUnit.play();
    this.props.togglePlay();

    let newTime = formatTime(audioUnit.duration);
    this.setState({
      songTime: newTime
    })
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

    let audioUnit = document.getElementById("audio");
    if (audioUnit.volume === 0) {
      audioUnit.volume = 1
    } else {
      audioUnit.volume = 0
    };
  };

  playNext() {
    let { pauseSong, songQueue, playSong, togglePlay, setQueue } = this.props;

    if (songQueue.length) {
      let newSong = songQueue.shift();
      let newQueue = songQueue;
      playSong(newSong);
      setQueue(newQueue);
    } else {
      togglePlay();
      playSong({});
    };
  };

  render () {
    let { likeClicked, muteClicked } = this.state;
    let { isPlaying, currentSong } = this.props;

    let playing = isPlaying ? "hidden" : "";
    let paused = isPlaying ? "" : "hidden";

    let unliked = likeClicked ? "hidden" : "";
    let liked = likeClicked ? "" : "hidden";

    let unmuted = muteClicked ? "hidden" : "";
    let muted = muteClicked ? "" : "hidden";

    let songStart = '0:00';

    return (
      <div className="musicplayer">
        <audio id="audio" src={currentSong.songUrl} onEnded={this.playNext} autoPlay>
          Your browser does not support html Audio elements
        </audio>
        <div className="left-side-musicplayer">
          <div className="title-artist">
            <p className="song-title-musicplayer">{currentSong.title}</p>
            <p className="artist-musicplayer">{currentSong.artist_id}</p>
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
              <i className={`fas fa-play music-player-play ${playing}`}></i>
              <i className={`fas fa-pause ${paused}`}></i>
            </div>
            <i className="fas fa-step-forward" onClick={this.playNext}></i>
            <button id="redo-btn">
              <i className="fas fa-redo-alt"></i>
            </button>
          </div>
          <div className="progress-bar">
            <p className="play-time">{songStart}</p>
            {/* <input
              type="range"
              min="0"
              max="100"
              className="progress-slider"
            /> */}
            <progress max="100" className="progress-slider"></progress>
            <p className="play-time">{this.state.songTime}</p>
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

export default MusicPlayer;