import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

let _nullState = { currentUser: null}

const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.user});
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, state, _nullState);
    default:
      return state;
  }
}

export default sessionReducer;