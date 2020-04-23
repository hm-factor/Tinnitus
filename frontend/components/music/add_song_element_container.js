import React from 'react';
import { connect } from 'react-redux';
import { addSongToPlaylist } from '../../actions/playlist_actions';

const AddSongElement = (props) => {
  let { song, playlistId } = props

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let songId = song.id;
    props.addSongToPlaylist(playlistId, songId);
  };
    
  return (
    <div onClick={handleClick.bind(this)}>
      {playlistId}
    </div>
  )

}

const mdp = dispatch => {
  return {
    addSongToPlaylist: (playlistId, song) => dispatch(addSongToPlaylist(playlistId, song))
  }
}

export default connect(null, mdp)(AddSongElement)