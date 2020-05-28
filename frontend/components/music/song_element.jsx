import React from 'react';
import AddSongElement from './add_song_element_container';
import { formatTime } from '../../util/song_time_util.js';

export default class SongElement extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    let { songs, id, playlistIds, artists } = this.props;
    let artistId = songs[id].artist_id;
    let artist = artists[artistId]
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
          <div className="song-info">
            <div className="song-li-title">{songs[id].title}</div>
            <div className="song-li-artist">{artist.name}</div>
          </div>
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