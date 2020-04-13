# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  private    :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  has_many :playlist_songs
  has_many :songs, through: :playlist_songs
  has_many :likes, as: :likeable

  validates :title, presence: true, uniqueness: { scope: :author_id }
  validates :privacy, inclusion: { in: [true, false] }

  def add_song(song)
    self.playlist_songs.create({id: song.id})
    debugger
  end

  # def playlist_songs
  #   songs.all
  # end
end
