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
  has_one :author
  has_many :likes, as: :likeable

end
