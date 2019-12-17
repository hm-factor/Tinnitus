@albums.each do |album|
  json.set! album.id do
    json.partial! album, as: :album
  end
end