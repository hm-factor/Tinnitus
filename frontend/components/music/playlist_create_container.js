import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PlaylistCreate from './playlist_create';
import { createPlaylist } from '../../actions/playlist_actions';

const msp = state => {
  return {
    title: "",
    forModal: "createPlaylist"
  }
}

const mdp = dispatch => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(PlaylistCreate);