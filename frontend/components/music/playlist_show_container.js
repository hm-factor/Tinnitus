import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { addSongToPlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { playSong } from '../../actions/music_player_actions';

const msp = (state, ownProps) => {
  return {
    playlist: state.entities.playlists[ownProps.match.params.id],
    id: ownProps.match.params.id,
    songs: state.entities.songs,
    user: state.entities.users[state.session.currentUserId]
  };
};

const mdp = dispatch => {
  return {
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    playSong: (song) => dispatch(playSong(song))
  };
};

export default connect(msp, mdp)(PlaylistShow);