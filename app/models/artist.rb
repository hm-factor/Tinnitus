# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  bio        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  has_many :songs
  has_many :albums
  has_many :likes, as: :likeable

end
