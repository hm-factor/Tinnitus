import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { playSong, setQueue } from '../../actions/music_player_actions';

const msp = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.id],
    songs: state.entities.songs,
    user: state.entities.users[state.session.currentUserId]
  };
};

const mdp = dispatch => {
  return {
    playSong: (song) => dispatch(playSong(song)),
    setQueue: (queue) => dispatch(setQueue(queue))
  };
};

export default connect(msp, mdp)(AlbumShow);