import React from 'react';

class PlaylistCreate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ""
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
    this.props.closeModal();
    debugger;
    let copyState = Object.assign({}, this.state);
    if (this.state.title.length === 0) {
      copyState.title = "New Playlist"
    }
    this.props.createPlaylist(copyState);
  }

  render () {

    return (
      <div className="create-playlist-form">
        <i className="fas fa-times-circle"></i>
        <h1 className="create-playlist-title">Create new playlist</h1>
        <div className="create-playlist-input">
          <h3 className="create-playlist-input-title">Playlist Name</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="New Playlist"
            />
            <div className="create-playlist-btns">
              <button onClick={() => this.props.closeModal()}>CANCEL</button>
              <button type="submit">CREATE</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PlaylistCreate;