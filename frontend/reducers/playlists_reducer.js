import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
} from '../actions/playlist_actions';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.playlists );
    case RECEIVE_PLAYLIST:
      const { playlist } = action;
      newState[playlist.id] = playlist;
      return newState;
    case REMOVE_PLAYLIST:
      delete newState[action.playlistId]
      return newState;
    default:
      return state;
  };
};

export default playlistsReducer;