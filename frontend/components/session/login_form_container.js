import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';

const msp = state => {
  return {
    errors: Object.values(state.errors)
  }
}

const mdp = dispatch => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(msp, mdp)(LoginForm);