export const fetchArtists = artists => {
  return $.ajax({
    method: 'GET',
    url: '/api/artists',
    data: { artists }
  })
}

export const fetchArtist = artistId => {
  return $.ajax({
    method: 'GET',
    url: `api/artists/${artistId}`,
    data: { artist }
  })
}