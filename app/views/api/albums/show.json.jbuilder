json.set! @album.id do
  json.partial! @album, as: :album
  json.songIds @album.songs.pluck(:id)
end