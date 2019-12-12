import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup, clearErrors } from "../../actions/session_actions";

const msp = state => {
  return {
    user: {
      email: '',
      password: '',
      username: '',
      birth_date: '',
      gender: ''
    },
    errors: state.errors
  }
}

const mdp = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(msp, mdp)(SignupForm);