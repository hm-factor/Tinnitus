class RemoveIndexFromArtists < ActiveRecord::Migration[5.2]
  def change
    remove_index :artists, :name
  end
end
