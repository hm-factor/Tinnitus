json.partial! @playlist, as: :playlist

@playlist.songs.each do |song|
  json.set! song.id do 
    # json.partial! '/api/songs/song', song: song
    song
  end
end
