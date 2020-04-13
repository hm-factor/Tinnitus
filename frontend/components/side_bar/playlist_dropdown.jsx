import React from 'react';

export default class PlaylistDropdown extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    let showDropdown = this.props.hidden ? "hidden" : "";
    let {dropX, dropY, deletePlaylist, playlistId} = this.props;

    return (
      <ul 
        style={{left: dropX, top: dropY}} 
        className={`playlist-dropdown ${showDropdown}`}>
        <li 
        onClick={() => deletePlaylist(playlistId)}
        className="playlist-dropdown-content dropdown-delete">Delete</li>
        <li className="playlist-dropdown-content dropdown-rename">Rename</li>
      </ul>
    )
  };
};

