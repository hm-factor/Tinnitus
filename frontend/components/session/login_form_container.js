import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return {
    errors: Object.values(state.errors)
  };
};

const mdp = dispatch => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(msp, mdp)(LoginForm));
