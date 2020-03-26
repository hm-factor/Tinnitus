import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
} from '../actions/playlist_actions';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.playlists );
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, { [action.playlist.id]: action.playlist, songs: action.playlist.songs });
    case REMOVE_PLAYLIST:
      let newState = Object.assign({}, state);
      delete newState[action.playlistId]
      return newState;
    default:
      return state;
  };
};

export default playlistsReducer;