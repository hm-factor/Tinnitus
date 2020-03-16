import { connect } from 'react-redux';
import { removePlaylist } from '../../actions/playlist_actions';
import PlaylistDropdown from './playlist_dropdown';

const mdp = dispatch => {
  return {
    removePlaylist: () => dispatch(removePlaylist(id))
  };
};

export default connect(null, mdp)(PlaylistDropdown);