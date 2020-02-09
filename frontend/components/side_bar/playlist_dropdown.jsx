import React from 'react';

export default class PlaylistDropdown extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <ul className="playlist-dropdown">
        <li>Delete</li>
        <li>Rename</li>
      </ul>
    )
  };
};

