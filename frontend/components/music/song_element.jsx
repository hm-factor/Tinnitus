import React from 'react';
import AddSongElement from './add_song_element_container';
import { formatTime } from '../../util/song_time_util.js';

export default class SongElement extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    let { songs, id, playlistIds } = this.props;
    let playlistIdList = playlistIds.map( playlistId => {
      return (
        <li key={playlistId}> 
          <AddSongElement song={songs[id]} playlistId={playlistId} />
        </li>
      );
    });

    // let time = formatSong(songs[id]);

    return (
      <div className="song-li">
        <div className="song-li-left">
          <div className="song-li-note">
            <i className="fas fa-music"></i>
          </div>
          <div className="song-li-title">{songs[id].title}</div>
          <div className="song-li-artist">{songs[id].artist_id}</div>
        </div>
        {/* <ul>{playlistIdList}</ul> */}
        <div className="song-li-right">
          <div className="song-li-options">
            <div className="song-li-ellipsis">
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="song-li-time">0:00</div>
          </div>
        </div>
      </div>
    );
  }
}