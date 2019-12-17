import * as artistUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

const receiveArtists = artists => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

const receiveArtist = artist => {
  return {
    type: RECEIVE_ARTIST,
    artist
  };
};

export const fetchArtists = artists => {
  return artistUtil.fetchArtists(artists)
    .then( artists => dispatch(receiveArtists(artists)));
};

export const fetchArtist = artistId => {
  return artistUtil.fetchArtist(artistId)
    .then( artist => dispatch(receiveArtist(artist)));
};