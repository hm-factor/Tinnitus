require 'open-uri'

User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all
Playlist.destroy_all

demoUser = User.create!({
  username: "Guest", 
  password: "demodemo",
  email: "demo@demo.com",
  birth_date: "02/02/2020",
  gender: "non-binary"
})

demoPlaylist = Playlist.create!({
  title: "demoPlaylist",
  author_id: demoUser.id,
  privacy: false
})

bm = Artist.create({
  name: 'Black Midi',
  bio: 'not really black midi'
})

bm_album = bm.albums.create({
  title: 'unreleased live',
  year: '2019'
})

song_1 = bm_album.songs.create({
  title: 'song 1',
  artist_id: bm_album.artist_id
})

song_2 = bm_album.songs.create({
  title: 'song 2',
  artist_id: bm_album.artist_id
})

song_3 = bm_album.songs.create({
  title: 'song 3',
  artist_id: bm_album.artist_id
})

song_file_1 = open('https://tinnitus-seeds.s3.amazonaws.com/bm1.mp3')
song_1.song_file.attach(io: song_file_1, filename:'bm1.mp3')
song_file_2 = open('https://tinnitus-seeds.s3.amazonaws.com/bm2.mp3')
song_2.song_file.attach(io: song_file_2, filename:'bm2.mp3')
song_file_3 = open('https://tinnitus-seeds.s3.amazonaws.com/bm3.mp3')
song_3.song_file.attach(io: song_file_3, filename:'bm3.mp3')

demoPlaylist.add_song(song_1)
demoPlaylist.add_song(song_2)
demoPlaylist.add_song(song_3)

# post = Post.first
# file = File.open('app/assets/images/sennacy.jpg')
# post.photo.attach(io: file, filename: 'sennacy.jpg')
# post.photo.attached? # => true




