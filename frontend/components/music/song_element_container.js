import SongElement from './song_element';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    song: state.entities.songs
  };
};

// const mdp = dispatch => {
//   return {
//     playSong: song => dispatch(playSong(song))
//   }
// }

export default connect(msp, null)(SongElement);