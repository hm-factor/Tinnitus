import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { fetchSongs } from '../../actions/song_actions';

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
    fetchSongs: () => dispatch(fetchSongs())
  }
};

export default connect(msp, mdp)(MusicPlayer);