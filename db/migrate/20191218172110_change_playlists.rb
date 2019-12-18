class ChangePlaylists < ActiveRecord::Migration[5.2]
  def change
    rename_column :playlists, :private, :privacy
  end
end
