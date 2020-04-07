import React from 'react';
import { Redirect } from "react-router-dom";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { album, songs, user } = this.props;
    if (!album) return <Redirect to='/' />;


    return (
      <div className="playlist-show-page">
        <div className="playlist-show-left">
          <div className="playlist-photo">
            <i className="fas fa-deaf"></i>
          </div>
          <p className="playlist-title">{album.title}</p>
          <p className="playlist-author">by: {album.artist_id}</p>
          <button className="playlist-play-btn">PLAY</button>
        </div>
        <div className="playlist-show-right">
          <ul className="playlist-show-ul">ok</ul>
        </div>
      </div>
    );
  }
}

export default AlbumShow;