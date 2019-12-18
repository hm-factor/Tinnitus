import { connect } from 'react-redux';
import SideBar from './side_bar';

const msp = state => {
  if (!state.session.currentUserId) return {};
  return {
    userId: state.session.currentUserId
  };
}

// const mdp = dispatch => {
//   return {

//   }
// }

export default connect(msp, null)(SideBar);