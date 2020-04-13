import { connect } from 'react-redux';
import { deletePlaylist } from '../../actions/playlist_actions';
import PlaylistDropdown from './playlist_dropdown';

const mdp = dispatch => {
  return {
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
  };
};

export default connect(null, mdp)(PlaylistDropdown);