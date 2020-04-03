import { fetchArtists } from '../../actions/artist_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { playSong } from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicElement from './music_element';

const msp = state => {
  return {
    authoredPlaylists: state.entities.users.playlists,
    allPlaylists: state.entities.playlists,
    albums: state.entities.albums
  }
}

const mdp = dispatch => {
  return {
    playSong: (song) => dispatch(playSong(song))
  }
}

export default connect(msp, mdp)(MusicElement);