# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all

demoUser = User.create!({
  username: "Demo", 
  password: "demodemo",
  email: "demo@demo.com",
  birth_date: "02/02/2020",
  gender: "non-binary"
})

#10.times do |i|
#  Artist.create({
#    name: Faker::Music::RockBand.name,
#    bio: Faker::Movies::StarWars.wookie_sentence
#  })
#end

#Artist.all.each do |artist|
#  3.times do |j|
#    artist.album.create({
#      title: Faker::Space.star_cluster,
#      year: rand(1900..2020)
#    })
#  end
#end
  
  
  #11.times do 
  #  Song.create!({
  #    title: Faker::Space.star,
  #    album_id: alb.id,
  #    artist_id: art.id
  #  })
  #end

# 30.times do 
#   User.create(
#     username: Faker::Internet.username,
#     password: Faker::Internet.password(min_length: 6, max_length:  12)
#   )
# end
