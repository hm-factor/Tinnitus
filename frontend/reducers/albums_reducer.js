import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM
} from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, action.albums);
    case RECEIVE_ALBUM:
      newState[action.album.id] = action.album;
      return newState;
    default:
      return state;
  }
}

export default albumsReducer;