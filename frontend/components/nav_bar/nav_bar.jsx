import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { user, logout } = this.props;

    if (user) {
      return (
        <div>
          { user.username }
          <button onClick={logout}>LOGOUT</button>
        </div>
      )
    } else {
      return(
        <div>
          <Link to='/signup'>SIGN UP</Link>
          <Link to='/login'>LOG IN</Link>
        </div>
      )
    }
  }
}

export default NavBar;