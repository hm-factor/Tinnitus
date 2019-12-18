import { connect } from 'react-redux';
import React from 'react';
import PlaylistCreate from './playlist_create';
import { createPlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => {
  return {
    name: "",
    forModal: "createPlaylist"
  }
}

const mdp = dispatch => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    // openModal: (
    //   <button onClick={() => dispatch(openModal('createPlaylist'))}>
    //     Create Playlist
    //   </button>
    // ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(PlaylistCreate);