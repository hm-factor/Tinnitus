import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { deletePlaylist } from './actions/playlist_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.curretUser;
  } else {
    store = configureStore();
  };

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.deletePlaylist = deletePlaylist;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
})