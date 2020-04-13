export const PLAY_SONG = 'PLAY_SONG'; 
export const PAUSE_SONG = 'PAUSE_SONG'; 
export const TOGGLE = 'TOGGLE'; 
export const SET_QUEUE = 'SET_QUEUE'; 

export const playSong = song => {
  return {
    type: PLAY_SONG,
    song
  };
};

export const setQueue = queue => {
  return {
    type: SET_QUEUE,
    queue
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



