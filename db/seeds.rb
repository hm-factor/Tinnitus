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

demoPlaylist = Playlist.create!({
  title: "demoPlaylist",
  author_id: demoUser.id,
  private: false
})

5.times do
 Artist.create({
   name: Faker::Music::RockBand.unique.name,
   bio: Faker::Movies::StarWars.wookie_sentence
 })
end

Artist.all.each do |artist|
 3.times do
   artist.albums.create({
     title: Faker::Movies::StarWars.unique.call_sign,
     year: rand(1900..2020)
   })
 end
end
  
Album.all.each do |album|
  7.times do 
    album.songs.create({
      title: Faker::Movies::StarWars.specie,
      album_id: album.id,
      artist_id: album.artist_id
    })
  end
end



# 30.times do 
#   User.create(
#     username: Faker::Internet.username,
#     password: Faker::Internet.password(min_length: 6, max_length:  12)
#   )
# end
