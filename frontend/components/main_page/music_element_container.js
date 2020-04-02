import { connect } from 'react-redux';
import { receiveArtists } from '../../actions/artist_actions';
import { receivePlaylists } from '../../actions/playlist_actions';
import { receiveAlbums } from '../../actions/album_actions';
import { playSong } from '../../actions/music_player_actions';
import MusicElement from './music_element';

const msp = state => {
  return {

  }
}

const mdp = dispatch => {
  return {
    receivePlaylists: () => dispatch(receivePlaylists()),
    receiveAlbums: () => dispatch(receiveAlbums()),
    receiveArtists: () => dispatch(receiveArtists()),
    playSong: (song) => dispatch(playSong(song))
  }
}

export default connect(msp, mdp)(MusicElement);