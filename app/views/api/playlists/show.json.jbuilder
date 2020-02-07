json.partial! @playlist, as: :playlist
# json.array! @playlist.songs
@playlist.songs.each do |song|
  json.partial! '/api/songs/song', song: song
end
