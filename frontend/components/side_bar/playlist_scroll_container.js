import { connect } from 'react-redux';

const msp = state => {
  return {
    playlists: state.entities.playlists
  }
}

const mdp = dispatch => {

}

export default connect(msp, mdp)(PlaylistScroll);