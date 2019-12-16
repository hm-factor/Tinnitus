json.set! @artist.id do 
  json.extract! @artist, :id, :name, :bio
  json.albumIds @artist.albums.pluck(:id)
end