export const createPlaylist = playlist => {
  debugger;
  return $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: {playlist}
  })
}

export const fetchPlaylist = playlistId => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlists/${playlistId}`
  })
} 

export const fetchPlaylists = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/collection/playlists'
  })
} 

// need an edit request

// export const editPlaylist = playlist => {
//   return $.ajax({
//     method: 'PATCH',
//     url: '/api/playlist'
//   })
// }

export const deletePlaylist = playlistId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlist/${playlistId}`
  })
}