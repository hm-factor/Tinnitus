import {
  PLAY_SONG,
  SET_QUEUE,
  SET_TIME,
  PAUSE_SONG,
  TOGGLE
} from '../actions/music_player_actions';

const emptyState = {
  currentSong: {},
  isPlaying: false,
  songTime: '0:00',
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
      let songIdx = newState.songHistory.indexOf(action.song.id);
      if (songIdx === -1) {
        newState.songHistory.push(action.song.id);
      } else if (typeof(songIdx) !== undefined) {
        newState.songHistory.splice(1, songIdx);
        newState.songHistory.push(action.song.id);
      };
      return newState;
    case PAUSE_SONG:
      newState.isPlaying = false;
      return newState;
    case TOGGLE:
      newState.isPlaying = !state.isPlaying;
      return newState;
    case SET_QUEUE:
      newState.songQueue = action.queue;
      return newState;
    case SET_TIME:
      newState.songTime = action.time;
      return newState;
    default:
      return state;
  }
};

export default musicPlayerReducer;