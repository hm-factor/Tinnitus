import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS
} from '../actions/artist_actions';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;  
    case RECEIVE_ARTIST:
      return Object.assign({}, state, { [action.artist.id]: action.artist });
    default:
      return state;
  }
}

export default artistsReducer;