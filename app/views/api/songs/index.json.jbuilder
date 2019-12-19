@songs.each do |song|
  json.set! song.id do
    json.partial! song, as: :song
    json.songUrl url_for(song.song_file)
  end
end