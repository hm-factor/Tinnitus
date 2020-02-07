@songs.each do |song|
  json.set! song.id do
    json.partial! song, as: :song
  end
end

# json.partial! @songs, as: :songs