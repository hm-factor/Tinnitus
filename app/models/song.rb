# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  belongs_to :album
  belongs_to :artist
  has_many :likes, as: :likeable
  
end
