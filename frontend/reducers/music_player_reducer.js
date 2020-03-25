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
  switch (action.type) {
    case PLAY_SONG:
      let newState = Object.assign({}, state);
      newState.currentSong = action.song;
      newState.isPlaying = true;
      newState.songTime = action.song.duration;
      newState.songHistory = newState.songHistory.push(action.song);
      return newState;
    case PAUSE_SONG:
      let newState = Object.assign({}, state);
      newState.isPlaying = false;
      return newState;
    case TOGGLE:
      let newState = Object.assign({}, state);
      newState.isPlaying = !state.isPlaying;
      return newState;
    default:
      return state;
  }
}