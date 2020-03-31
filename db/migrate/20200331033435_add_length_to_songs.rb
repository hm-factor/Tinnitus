class AddLengthToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :length, :integer
  end
end
