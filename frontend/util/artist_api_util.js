export const fetchArtists = artists => {
  return $.ajax({
    method: 'GET',
    url: '/api/collection/artists',
    data: { artists }
  })
}

export const fetchArtist = artist => {
  return $.ajax({
    method: 'GET',
    url: `api/artists/${artist.id}`,
    data: { artist }
  })
}