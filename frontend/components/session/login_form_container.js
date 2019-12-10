import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, receiveCurrentUser } from '../../actions/session_actions';

const msp = state => {
  return {
    errors: state.errors
  }
}

const mdp = dispatch => {
  return {
    login: user => dispatch(login(user)),
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
  }
}

export default connect(msp, mdp)(LoginForm);