import React from 'react';

export default class SongElement extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { song, id } = this.props;
    return (
      <div className="song-info">
        <div className="song-li-title">{song[id].title}</div>
        <div className="song-li-artist">{song[id].artist_id}</div>
      </div>
    );
  }
}