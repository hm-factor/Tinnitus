import {
  RECEIVE_SONGS,
  RECEIVE_SONG
} from '../actions/song_actions';

const songsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      return Object.assign({}, state, { [action.song.id]: action.song })
    default:
      return state;
  }
}

export default songsReducer;