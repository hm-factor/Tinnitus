import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import NavBarContainer from "../nav_bar/nav_bar_container";



const MainPageContainer = () => {
  return (
      <div className="main-cont">
        <div className="side-bar">
          <h1 className="title">
            {/* <Link to='/'>tinnitus</Link> */}
            <NavLink activeClassName='title' to='/'>tinnitus</NavLink>
          </h1>
        </div>

        <div className="nav-cont">
          <NavBarContainer />
        </div>
      </div>
  )
}

export default MainPageContainer;