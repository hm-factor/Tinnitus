import React from 'react';
import AddSongElement from './add_song_element_container';

export default class SongElement extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    let { songs, id, playlistIds } = this.props;
    let playlistIdList = playlistIds.map( playlistId => {
      return (
        <li key={playlistId}> 
          <AddSongElement songId={songs[id]} playlistId={playlistId} />
        </li>
      )
    })

    return (
      <div className="song-info">
        <div className="song-li-title">{songs[id].title}</div>
        <div className="song-li-artist">{songs[id].artist_id}</div>
        <ul>
          {playlistIdList}
        </ul>
      </div>
    );
  }
}