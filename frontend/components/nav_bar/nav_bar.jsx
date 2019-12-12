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
        <div className="nav-prof">
          <div className="arrows">
            <span className="A1">A1</span>
            <span className="A2">A2</span>
          </div>
          <div className="nav-user">{user.username}</div>
          <button onClick={logout}>LOGOUT</button>
        </div>
      );
    } else {
      return (
        <div className="nav-links">
          <div className="arrows">
            <span className="A1">A1</span>
            <span className="A2">A2</span>
          </div>
          <div className="nav-forms">
            <div className="nav-sign">
              <Link to="/signup">SIGN UP</Link>
            </div>
            <div className="nav-log">
              <Link to="/login">LOG IN</Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default NavBar;