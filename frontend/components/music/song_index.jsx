import React from 'react';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    this.props.fetchSongs();
  }

  render () {
    const { songs, addSongToPlaylist } = this.props;
    if (!songs.length) return <div></div>;
    debugger;
    const songLis = songs.map( song => {
      debugger;
      return (
        <li key={song.id}>
          {song.title}
        </li>
      )
    })
    return (  
      <div>
        <ul>
          {songLis}
        </ul>
      </div>
    )
  }
}

export default SongIndex;