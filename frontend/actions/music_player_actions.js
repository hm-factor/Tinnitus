export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const TOGGLE = 'TOGGLE';

const playSong = song => {
  return {
    type: PLAY_SONG,
    song
  };
};

const pauseSong = () => {
  return {
    type: PAUSE_SONG
  };
};

const togglePlay = () => {
  return {
    type: TOGGLE
  };
};