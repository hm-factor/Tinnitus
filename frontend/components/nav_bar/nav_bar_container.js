import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const msp = state => {
  if (!state.session.currentUserId) return {};
  return {
    user: state.entities.users[state.session.currentUserId]
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(NavBar);