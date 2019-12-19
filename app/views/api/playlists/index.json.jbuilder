@playlists.each do |playlist|
  json.set! playlist.id do
    json.partial! playlist, as: :playlist
  end
end