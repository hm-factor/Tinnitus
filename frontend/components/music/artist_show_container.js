import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show'

const msp = (state, ownProps) => {
  const artist = state.entities.artist[ownProps.match.params.artistId]
  return {
    artist
  }
}

const mdp = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id))
  }
}

export default connect(msp, mdp)(ArtistShow)