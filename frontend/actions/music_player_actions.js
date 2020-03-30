<<<<<<< HEAD
export const PLAY_SONG = 'PLAY_SONG'; 
export const PAUSE_SONG = 'PAUSE_SONG'; 
export const TOGGLE = 'TOGGLE'; 
=======
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const TOGGLE = 'TOGGLE';
>>>>>>> 90aa25b34e9f4eee7e1398a3c80f26716c4ca898

export const playSong = song => {
  return {
    type: PLAY_SONG,
    song
  };
};

export const pauseSong = () => {
  return {
    type: PAUSE_SONG
<<<<<<< HEAD
  }
}
=======
  };
};
>>>>>>> 90aa25b34e9f4eee7e1398a3c80f26716c4ca898

export const togglePlay = () => {
  return {
    type: TOGGLE
<<<<<<< HEAD
  }
}
=======
  };
};
>>>>>>> 90aa25b34e9f4eee7e1398a3c80f26716c4ca898
