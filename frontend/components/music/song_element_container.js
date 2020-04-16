import SongElement from './song_element';
import { connect, useStore } from 'react-redux';
import { addSongToPlaylist } from '../../actions/playlist_actions';

const msp = (state) => {
  return {
    songs: state.entities.songs,
    playlistIds: state.entities.users.playlists
  };
};

const mdp = dispatch => {
  return {
    addSongToPlaylist: songId => dispatch(addSongToPlaylist(playlistId, songId))
  }
}

export default connect(msp, mdp)(SongElement);