json.set! @artist.id do 
  json.partial! @artist, as: :artist
  json.albumIds @artist.albums.pluck(:id)
end

@artist.albums.each do |album|
  json.albums do
    json.set! album.id do
      json.partial! '/api/albums/album', album: album
    end
  end

  album.songs.each do |song|
    json.set! song.id do
      json.partial! '/api/songs/song', song: song
    end
  end
end