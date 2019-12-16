export const fetchSongs = songs => {
  return $.ajax({
    method: 'GET',
    url: '/api/collection/songs',
    data: { songs }
  })
}

export const fetchSong = song => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${song.id}`,
    data: { song }
  })
}