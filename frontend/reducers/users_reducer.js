import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PLAYLISTS } from '../actions/playlist_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_PLAYLISTS:

      return Object.assign({}, state, { playlists: action.playlists});
    default:
      return state;
  }
}

export default usersReducer;