json.partial! @user, as: :user
json.playlists do
  json.array! @user.playlists.ids
end