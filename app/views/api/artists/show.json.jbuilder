json.set! @artist.id do 
  json.partial! @artist, as: :artist
  json.albumIds @artist.albums.pluck(:id)
end