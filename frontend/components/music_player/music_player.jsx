import React from 'react';
import { Link } from 'react-router-dom';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playClicked: false,
      likeClicked: false,
      muteClicked: false
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike= this.handleLike.bind(this);
    this.handleMute= this.handleMute.bind(this);
  };

  componentDidMount() {
    this.props.fetchSongs();
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
    if (this.props.currentSong === undefined) {
      return <div></div>;
    } else {
      let { playClicked, likeClicked, muteClicked } = this.state;
      let { currentSong } = this.props;

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
                <i className={`fas fa-play ${playing}`}></i>
                <i className={`fas fa-pause ${paused}`}></i>
              </div>
              <i className="fas fa-step-forward"></i>
              <button id="redo-btn">
                <i className="fas fa-redo-alt"></i>
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