import { connect } from 'react-redux';
import SideBar from './side_bar';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = state => {
  if (!state.session.currentUserId) return {};
  return {
    userId: state.session.currentUserId
  };
}

const mdp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
}

export default connect(msp, mdp)(SideBar);