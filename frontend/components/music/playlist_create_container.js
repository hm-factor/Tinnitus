import { connect } from 'react-redux';
import React from 'react';
// import PlaylistCreate from './playlist_create';
// import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {
    
  }
}

const mdp = dispatch => {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(PlaylistCreate);