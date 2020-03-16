import React from 'react';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { name, bio, albumIds } = props.artist;
    const albumLis = albumIds.map( id => {
      return (
        <li>{id}</li>
      )
    })

    return (
      <div className="artist-show-page">
        <div>
          {name}
        </div>
        <div>
          <ul>
            {albumLis}
          </ul>
        </div>
      </div>
    )
  }
}

export default ArtistShow;