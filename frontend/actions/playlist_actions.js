import * as playlistUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

const recievePlaylists = playlists => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

const recievePlaylist = playlist => {
  debugger;
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

const removePlaylist = playlistId => {
  return {
    type: REMOVE_PLAYLIST,
    playlistId
  };
};

export const createPlaylist = playlist => dispatch => {
  return playlistUtil.createPlaylist(playlist)
    .then( playlist => dispatch(recievePlaylist(playlist)));
};

export const fetchPlaylist = playlist => dispatch => {
  return playlistUtil.fetchPlaylist(playlist)
    .then( playlist => dispatch(recievePlaylist(playlist)));
};

export const fetchPlaylists = playlists => dispatch => {
  return playlistUtil.fetchPlaylists(playlists)
    .then( playlists => dispatch(recievePlaylists(playlists)));
};

export const fetchAuthoredPlaylists = id => dispatch => {
  return playlistUtil.fetchAuthoredPlaylists(id)
    .then( playlists => dispatch(recievePlaylists(playlists)));
}

export const addSongToPlaylist = (playlistId, songId) => dispatch => {
  return playlistUtil.addSongToPlaylist(playlistId, songId)
    .then( playlist => dispatch(recievePlaylist(playlist)));
};

export const deletePlaylist = playlistId => dispatch => {
  return playlistUtil.deletePlaylist(playlistId)
    .then( id => dispatch(removePlaylist(id)));
};