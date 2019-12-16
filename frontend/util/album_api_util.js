export const fetchAlbums = albums => {
  return $.ajax({
    method: 'GET',
    url: '/api/collection/albums',
    data: { albums }
  })
}

export const fetchAlbum = album => {
  return $.ajax({
    method: 'GET',
    url: `api/albums/${album.id}`,
    data: { album }
  })
}