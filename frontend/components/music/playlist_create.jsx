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
        <i className="fas fa-times" onClick={() => this.props.closeModal()}></i>
        <h1 className="new-playlist-title">Create new playlist</h1>
        <div className="new-playlist-input-box">
          <form onSubmit={this.handleSubmit}>
            <div className="new-playlist-input">
              <h3 className="new-playlist-input-title">Playlist Name</h3>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="New Playlist"
                className="new-playlist-input-box"
              />
            </div>
            <div className="new-playlist-btns">
              <div className="playlist-cancel-btn-box">
                <button
                  onClick={() => this.props.closeModal()}
                  className="playlist-cancel-btn"
                >
                  CANCEL
                </button>
              </div>
              <div className="playlist-create-btn-box">
                <input
                  type="submit"
                  value="CREATE"
                  className="playlist-create-btn"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PlaylistCreate;