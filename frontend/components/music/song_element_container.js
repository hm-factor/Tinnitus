import SongElement from './song_element';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
  return {
    song: state.entities.songs[ownProps.match.params.id]
  };
};

export default connect(msp, null)(SongElement);