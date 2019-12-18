import { connect } from 'react-redux';
import React from 'react';
import PlaylistCreate from './playlist_create';
import { createPlaylist } from '../../actions/playlist_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => {
  return {
    name = ""
  }
}

const mdp = dispatch => {
  return {
    createPlaylist: () => dispatch(createPlaylist()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(PlaylistCreate);