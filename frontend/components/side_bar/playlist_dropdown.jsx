import React from 'react';

export default class PlaylistDropdown extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    let showDropdown = this.props.hidden ? "hidden" : "";
    let {dropX, dropY} = this.props

    return (
      <ul 
        style={{left: dropX, top: dropY}} 
        className={`playlist-dropdown ${showDropdown}`}>
        <li className="playlist-dropdown-content">Delete</li>
        <li className="playlist-dropdown-content">Rename</li>
      </ul>
    )
  };
};

