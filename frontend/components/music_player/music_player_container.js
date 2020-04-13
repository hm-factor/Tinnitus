import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { playSong, pauseSong, togglePlay, setQueue, setTime } from '../../actions/music_player_actions';

const msp = ({musicPlayer}) => {
  let {
    currentSong,
    isPlaying,
    songTime,
    songQueue,
    songHistory
  } = musicPlayer;

  return {
    currentSong,
    isPlaying,
    songTime,
    songQueue,
    songHistory
  };
};

const mdp = dispatch => {
  return {
    playSong: (song) => dispatch(playSong(song)),
    pauseSong: () => dispatch(pauseSong()),
    togglePlay: () => dispatch(togglePlay()),
    setQueue: (queue) => dispatch(setQueue(queue)),
    setTime: (time) => dispatch(setTime(time))
  }
};

export default connect(msp, mdp)(MusicPlayer);