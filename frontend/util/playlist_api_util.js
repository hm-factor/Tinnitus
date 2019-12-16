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

export const deletePlaylist = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/playlist'
  })
}