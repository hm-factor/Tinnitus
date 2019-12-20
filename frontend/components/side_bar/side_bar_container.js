import { connect } from 'react-redux';
import SideBar from './side_bar';
import { openModal } from "../../actions/modal_actions";
import { fetchAuthoredPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';

const msp = state => {
  if (!state.session.currentUserId) return {};
  return {
    userId: state.session.currentUserId
  };
}

const mdp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    fetchAuthoredPlaylists: id => dispatch(fetchAuthoredPlaylists(id)),
    fetchSongs: () => dispatch(fetchSongs())
  };
}

export default connect(msp, mdp)(SideBar);