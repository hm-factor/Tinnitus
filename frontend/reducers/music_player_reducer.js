import {
  PLAY_SONG,
  PAUSE_SONG,
  TOGGLE
} from '../actions/music_player_actions';

const emptyState = {
  currentSong: {},
  isPlaying: false,
  songTime: 0,
  songQueue: [],
  songHistory: []
};

const musicPlayerReducer = (state = emptyState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case PLAY_SONG:
      newState.currentSong = action.song;
      newState.isPlaying = true;
      newState.songTime = action.song.duration;
      newState.songHistory.push(action.song.id);
      return newState;
    case PAUSE_SONG:
      newState.isPlaying = false;
      return newState;
    case TOGGLE:
      newState.isPlaying = !state.isPlaying;
      return newState;
    default:
      return state;
  }
};

export default musicPlayerReducer;