import React from 'react';

export default class MusicItem extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const { fetchAuthoredPlaylists, userId } = this.props;
    fetchAuthoredPlaylists(userId);
  };

  render() {
    const { userId, authoredPlaylists } = this.props;
    let musicItemList = () => {
      userId ? (
        authoredPlaylists.map( itemId => {
          return (
            <div key={itemId}>
              <div>{authoredPlaylists[itemId].title}</div>
            </div>
          )
        })
      ) : (
        return (
          <div></div>
        )
    }
  
    return(
      <div>
        {musicItemList}
      </div>
    )
  }
};