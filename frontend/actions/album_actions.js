import * as albumUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

const receiveAlbums = albums => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

const receiveAlbum = album => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

export const fetchAlbums = albums => dispatch => {
  return albumUtil.fetchAlbums(albums)
    .then( albums => dispatch(receiveAlbums(albums)));
}

export const fetchAlbum = album => dispatch => {
  return albumUtil.fetchAlbum(album)
    .then(album => dispatch(receiveAlbum(album)));
}