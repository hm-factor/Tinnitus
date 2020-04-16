import React from 'react';
import { connect } from 'react-redux';
import { addSongToPlaylist } from '../../actions/playlist_actions';

const AddSongElement = (props) => {
  let { songId, playlistId } = props

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.addSongToPlaylist(songId, playlistId);
  };
    
  return (
    <div onClick={handleClick.bind(this)}>
      {playlistId}
    </div>
  )

}

const mdp = dispatch => {
  return {
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId))
  }
}

export default connect(null, mdp)(AddSongElement)