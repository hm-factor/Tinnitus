import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { playSong, pauseSong, togglePlay } from '../../actions/music_player_actions';

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
    togglePlay: () => dispatch(togglePlay())
  }
};

export default connect(msp, mdp)(MusicPlayer);