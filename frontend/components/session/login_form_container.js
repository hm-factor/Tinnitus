import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const msp = state => {
  return {
    errors: Object.values(state.errors)
  }
}

const mdp = dispatch => {
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(msp, mdp)(LoginForm);