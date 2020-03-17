import { connect } from 'react-redux';
import { deletePlaylist } from '../../actions/playlist_actions';
import PlaylistScroll from './playlist_scroll';
import { withRouter } from 'react-router';

const msp = (state, { history, match, location }) => {
  return {
    userPlaylistIds: state.entities.users.playlists,
    playlists: state.entities.playlists,
    history,
    match,
    location
  };
};

const mdp = dispatch => {
  return {
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
  };
};

export default withRouter(connect(msp, mdp)(PlaylistScroll));