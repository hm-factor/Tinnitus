export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const TOGGLE = 'TOGGLE';

export const playSong = song => {
  return {
    type: PLAY_SONG,
    song
  };
};

export const pauseSong = () => {
  return {
    type: PAUSE_SONG
  };
};

export const togglePlay = () => {
  return {
    type: TOGGLE
  };
};