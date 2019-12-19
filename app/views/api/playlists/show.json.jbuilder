json.partial! @playlist, as: :playlist
json.songs do
  json.array! @playlist.songs
end