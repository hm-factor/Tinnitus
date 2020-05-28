import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { playSong, setQueue, setTime } from '../../actions/music_player_actions';

const msp = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.id],
    songs: state.entities.songs,
    user: state.entities.users[state.session.currentUserId],
    artists: state.entities.artists
  };
};

const mdp = dispatch => {
  return {
    playSong: (song) => dispatch(playSong(song)),
    setQueue: (queue) => dispatch(setQueue(queue)),
    setTime: (time) => dispatch(setTime(time))
  };
};

export default connect(msp, mdp)(AlbumShow);