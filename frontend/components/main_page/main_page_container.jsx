import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container";
import Logo from '../side_bar/logo';

const MainPageContainer = () => {
  return (
      <div className="main-cont">
        <div className="side-bar">
          <div className="side-bar-nav">
            <Logo />
          </div>
        </div>

        <div className="nav-cont">
          <NavBarContainer />
        </div>
      </div>
  )
}

export default MainPageContainer;