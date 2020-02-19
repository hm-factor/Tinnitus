import React from 'react';

export default class PlaylistDropdown extends React.Component {
  constructor(props) {
    super(props);
  };

  toggleDropdownClass() {

  }

  render() {
    return (
      <ul className="playlist-dropdown off">
        <li className="playlist-dropdown-content">Delete</li>
        <li className="playlist-dropdown-content">Rename</li>
      </ul>
    )
  };
};

