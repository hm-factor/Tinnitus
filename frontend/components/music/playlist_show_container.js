import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { addSongToPlaylist } from '../../actions/playlist_actions';

const msp = (state, ownProps) => {
  return {
    playlist: state.entities.playlists[ownProps.match.params.id],
    songs: state.entities.songs,
    user: state.entities.users[state.session.currentUserId]
  }
}

const mdp = dispatch => {
  return {
    addSongToPlaylist: (id, song) => dispatch(addSongToPlaylist(id, song))
  }
}

export default connect(msp, mdp)(PlaylistShow);