export const createPlaylist = playlist => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: {playlist}
  })
}

export const fetchPlaylist = playlist => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlists/${playlist.id}`,
    data: {playlist}
  })
} 

export const fetchPlaylists = playlists => {
  return $.ajax({
    method: 'GET',
    url: '/api/collection/playlists',
    playlists
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