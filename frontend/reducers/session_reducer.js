import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    case LOGOUT_CURRENT_USER:

    case RECEIVE_ERRORS:
      
    default:
      return state;
  }
}

export default sessionReducer;