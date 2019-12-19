import { connect } from 'react-redux';
import { deletePlaylist } from '../../actions/playlist_actions';
import PlaylistScroll from './playlist_scroll';

const msp = state => {
  return {
    userPlaylistIds: state.entities.users.playlists,
    playlists: state.entities.playlists
  }
}

const mdp = dispatch => {
  return {
    deletePlaylist: () => dispatch(deletePlaylist())
  }
}

export default connect(msp, mdp)(PlaylistScroll);