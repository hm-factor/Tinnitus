import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import songsReducer from './songs_reducer';
import playlistsReducer from './playlists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  artists: artistsReducer,
  albums: albumsReducer,
  songs: songsReducer,
  playlists: playlistsReducer
})

export default entitiesReducer;