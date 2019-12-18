import React from 'react';

class PlaylistCreate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state);
  }

  render () {

    return (
      <div className="create-playlist-form">
        <h1 className="create-playlist-title">Create new playlist</h1>
        <div className="create-playlist-input">
          <h3 className="create-playlist-input-title">Playlist Name</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="New Playlist"
            />
          </form>
        </div>
        <div className="create-playlist-btns">
          <button>cancel/modal close</button>
          <button type="submit">CREATE</button>
        </div>
      </div>
    );
  }
}

export default PlaylistCreate;