export const fetchArtists = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/artists'
  })
}

export const fetchArtist = artistId => {
  return $.ajax({
    method: 'GET',
    url: `api/artists/${artistId}`
  })
}