import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="side-bar">
      <div className="side-logo">
        <NavLink activeClassName="side-title" to="/">
          <i className="fas fa-deaf"></i>
          tinnitus
        </NavLink>
      </div>
      <div className="side-links">
        <ul className="side-bar-ul">
          <li className="side-home">
            <NavLink className="side-nav-link" exact to="/">
              <i className="fas fa-home"></i>
              <span className="nav-li-text">Home</span>
            </NavLink>
          </li>
          <li className="side-search">
            <NavLink className="side-nav-link" exact to="/search">
              <i className="fas fa-search"></i>
              <span className="nav-li-text">Search</span>
            </NavLink>
          </li>
          <li className="side-lib">
            <NavLink className="side-nav-link" exact to="/collection/playlists">
              <i className="fas fa-book"></i>
              <span className="nav-li-text">Collection</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="side-playlist-create">

      </div>
      
      <div className="side-playlist-scroll">

      </div>
    </div>
  );
}

export default Logo;