import { connect } from 'react-redux';
import MusicItem from './music_item';
import { deletePlaylist, fetchAuthoredPlaylists } from '../../util/playlist_api_util';

const msp = state => {
  if (!state.session.currentUserId) return {};
  return {
    userId: state.session.currentUserId,
    authoredPlaylists: state.entities.playlists
  };
}

const mdp = dispatch => {
  return {
    fetchAuthoredPlaylists: (id) => dispatch(fetchAuthoredPlaylists(id)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id))
  }
}

export default connect(msp, mdp)(MusicItem);