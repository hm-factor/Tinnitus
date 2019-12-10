import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

let _nullState = { currentUserId: null}

const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUserId: action.user.id});
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, state, _nullState);
    default:
      return state;
  }
}

export default sessionReducer;