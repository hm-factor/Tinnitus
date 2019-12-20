import * as songUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs
  }
}

const receiveSong = song => {
  return {
    type: RECEIVE_SONG,
    song
  }
}

export const fetchSongs = () => dispatch => {
  return songUtil.fetchSongs()
    .then( songs => dispatch(receiveSongs(songs)))
}

export const fetchSong = song => dispatch => {
  return songUtil.fetchSongs(song)
    .then(song => dispatch(receiveSong(song)))
}