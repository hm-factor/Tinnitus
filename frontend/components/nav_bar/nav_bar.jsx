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
            <div className="arrow">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="arrow">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="nav-user-logout">
            <div className="nav-user">{user.username}</div>
            <button onClick={logout} className="logout-btn">
              <i className="fas fa-power-off"></i>
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-prof">
          <div className="arrows">
            <div className="arrow">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="arrow">
              <i className="fas fa-chevron-right"></i>
            </div>
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