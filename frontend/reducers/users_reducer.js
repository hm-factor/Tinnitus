import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_PLAYLIST:
      let newPlaylistArr = state.playlists.concat(action.playlist.id);
      return Object.assign({}, state, { playlists: newPlaylistArr })
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, { playlists: Object.keys(action.playlists) });
    default:
      return state;
  }
}

export default usersReducer;