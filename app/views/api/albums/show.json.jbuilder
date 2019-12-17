json.set! @album.id do
  json.partial! @album, as: :album
  json.songIds @album.songs.pluck(:id)
end

@album.songs.each do |song|
  json.songs do
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end