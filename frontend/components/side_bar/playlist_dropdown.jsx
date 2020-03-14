import React from 'react';

export default class PlaylistDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
  };

  toggleDropdown() {

  };

  render() {
    let showDropdown = this.props.hidden ? "hidden" : "";

    return (
      <ul className={`playlist-dropdown ${showDropdown}`}>
        <li className="playlist-dropdown-content">Delete</li>
        <li className="playlist-dropdown-content">Rename</li>
      </ul>
    )
  };
};

