export const fetchSongs = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/collection/songs'
  })
}

export const fetchSong = songId => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${songId}`
  })
}