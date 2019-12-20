import { connect } from 'react-redux';
import { addSongToPlaylist } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import SongIndex from './song_index';

const msp = state => {
  return {
    songs: state.entities.songs
  }
}

const mdp = dispatch => {
  return {
    addSongToPlaylist: (id, song) => dispatch(addSongToPlaylist(id, song)),
    fetchSongs: () => dispatch(fetchSongs())
  }
}

export default connect(msp, mdp)(SongIndex);