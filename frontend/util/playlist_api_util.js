export const createPlaylist = playlist => {
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

export const fetchAuthoredPlaylists = authorId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${authorId}/playlists`
  })
}

export const addSongToPlaylist = (id, song) => {
  return $.ajax({
    method: 'POST',
    url: `/api/playlists/${id}/songs`,
    data: {song}
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