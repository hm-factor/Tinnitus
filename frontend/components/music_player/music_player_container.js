import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { fetchSongs, fetchSong } from '../../actions/song_actions';

const msp = state => {
  return {
    songs: state.entities.songs,
    currentSong: "",
    currentSongLength: ""
  };
};

const mdp = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs())
  }
};

export default connect(msp, mdp)(MusicPlayer);