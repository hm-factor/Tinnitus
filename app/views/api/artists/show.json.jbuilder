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
end