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

bm_album_0 = bm.albums.create({
  title: 'unreleased live',
  year: '2019'
})

bm_album_1 = bm.albums.create({
  title: 'Live from USA',
  year: '2020'
})

song_0_1 = bm_album_0.songs.create({
  title: 'song 1',
  artist_id: bm_album_0.artist_id
})

song_0_2 = bm_album_0.songs.create({
  title: 'song 2',
  artist_id: bm_album_0.artist_id
})

song_0_3 = bm_album_0.songs.create({
  title: 'song 3',
  artist_id: bm_album_0.artist_id
})

song_1_1 = bm_album_1.songs.create({
  title: 'Intro',
  artist_id: bm_album_1.artist_id
})

song_1_2 = bm_album_1.songs.create({
  title: 'Crow\'s Perch',
  artist_id: bm_album_1.artist_id
})

song_1_3 = bm_album_1.songs.create({
  title: 'Of Schlagenheim',
  artist_id: bm_album_1.artist_id
})

song_1_4 = bm_album_1.songs.create({
  title: 'Tequila',
  artist_id: bm_album_1.artist_id
})

song_1_5 = bm_album_1.songs.create({
  title: 'Near DT, MI',
  artist_id: bm_album_1.artist_id
})

song_1_6 = bm_album_1.songs.create({
  title: 'Talking Heads',
  artist_id: bm_album_1.artist_id
})

song_1_7 = bm_album_1.songs.create({
  title: 'Speedway',
  artist_id: bm_album_1.artist_id
})

song_1_8 = bm_album_1.songs.create({
  title: 'Years Ago',
  artist_id: bm_album_1.artist_id
})

song_1_9 = bm_album_1.songs.create({
  title: 'Ducter',
  artist_id: bm_album_1.artist_id
})

song_1_10 = bm_album_1.songs.create({
  title: 'Jam Ft. Fat Tony',
  artist_id: bm_album_1.artist_id
})

song_1_11 = bm_album_1.songs.create({
  title: 'Jam',
  artist_id: bm_album_1.artist_id
})

song_1_12 = bm_album_1.songs.create({
  title: 'Reggae',
  artist_id: bm_album_1.artist_id
})

song_1_13 = bm_album_1.songs.create({
  title: 'Sweater',
  artist_id: bm_album_1.artist_id
})

song_1_14 = bm_album_1.songs.create({
  title: '953',
  artist_id: bm_album_1.artist_id
})

song_1_15 = bm_album_1.songs.create({
  title: 'John L',
  artist_id: bm_album_1.artist_id
})

song_1_16 = bm_album_1.songs.create({
  title: 'bmbmbm Ft. Fat Tony',
  artist_id: bm_album_1.artist_id
})

song_file_0_1 = open('https://tinnitus-seeds.s3.amazonaws.com/bm1.mp3')
song_0_1.song_file.attach(io: song_file_0_1, filename:'bm1.mp3')
song_file_0_2 = open('https://tinnitus-seeds.s3.amazonaws.com/bm2.mp3')
song_0_2.song_file.attach(io: song_file_0_2, filename:'bm2.mp3')
song_file_0_3 = open('https://tinnitus-seeds.s3.amazonaws.com/bm3.mp3')
song_0_3.song_file.attach(io: song_file_0_3, filename:'bm3.mp3')

song_file_1_1 = open('https://tinnitus-seeds.s3.amazonaws.com/01+Intro+(Doug+Fir%2C+Portland).mp3')
song_1_1.song_file.attach(io: song_file_1_1, filename:'01+Intro+(Doug+Fir%2C+Portland).mp3')
song_file_1_2 = open('https://tinnitus-seeds.s3.amazonaws.com/02+Crow\'s+Perch+(Constellation%2C+Chicago).mp3')
song_1_2.song_file.attach(io: song_file_1_2, filename:'02+Crow\'s+Perch+(Constellation%2C+Chicago).mp3')
song_file_1_3 = open('https://tinnitus-seeds.s3.amazonaws.com/03+Of+Schlagenheim+(The+High+Watt%2C+Nashville).mp3')
song_1_3.song_file.attach(io: song_file_1_3, filename:'03+Of+Schlagenheim+(The+High+Watt%2C+Nashville).mp3')
song_file_1_4 = open('https://tinnitus-seeds.s3.amazonaws.com/04+Tequila+(Warsaw%2C+Brooklyn).mp3')
song_1_4.song_file.attach(io: song_file_1_4, filename:'04+Tequila+(Warsaw%2C+Brooklyn).mp3')
song_file_1_5 = open('https://tinnitus-seeds.s3.amazonaws.com/05+Near+DT%2CMI+(The+Earl%2C+Atlanta).mp3')
song_1_5.song_file.attach(io: song_file_1_5, filename:'05+Near+DT%2CMI+(The+Earl%2C+Atlanta).mp3')
song_file_1_6 = open('https://tinnitus-seeds.s3.amazonaws.com/06+Talking+Heads+(The+High+Watt%2C+Nashville).mp3')
song_1_6.song_file.attach(io: song_file_1_6, filename:'06+Talking+Heads+(The+High+Watt%2C+Nashville).mp3')
song_file_1_7 = open('https://tinnitus-seeds.s3.amazonaws.com/07+Speedway+(Zebulon+Night+3%2C+Los+Angeles).mp3')
song_1_7.song_file.attach(io: song_file_1_7, filename:'07+Speedway+(Zebulon+Night+3%2C+Los+Angeles).mp3')
song_file_1_8 = open('https://tinnitus-seeds.s3.amazonaws.com/08+Years+Ago+(Warsaw%2C+Brooklyn).mp3')
song_1_8.song_file.attach(io: song_file_1_8, filename:'08+Years+Ago+(Warsaw%2C+Brooklyn).mp3')
song_file_1_9 = open('https://tinnitus-seeds.s3.amazonaws.com/09+Ducter+(Warsaw%2C+Brooklyn).mp3')
song_1_9.song_file.attach(io: song_file_1_9, filename:'09+Ducter+(Warsaw%2C+Brooklyn).mp3')
song_file_1_10 = open('https://tinnitus-seeds.s3.amazonaws.com/10+Jam+Ft.+Fat+Tony+(The+High+Watt%2C+Nashville).mp3')
song_1_10.song_file.attach(io: song_file_1_10, filename:'10+Jam+Ft.+Fat+Tony+(The+High+Watt%2C+Nashville).mp3')
song_file_1_11 = open('https://tinnitus-seeds.s3.amazonaws.com/11+Jam+(Warsaw%2C+Brooklyn).mp3')
song_1_11.song_file.attach(io: song_file_1_11, filename:'11+Jam+(Warsaw%2C+Brooklyn).mp3')
song_file_1_12 = open('https://tinnitus-seeds.s3.amazonaws.com/12+Reggae+(Warsaw%2C+Brooklyn).mp3')
song_1_12.song_file.attach(io: song_file_1_12, filename:'12+Reggae+(Warsaw%2C+Brooklyn).mp3')
song_file_1_13 = open('https://tinnitus-seeds.s3.amazonaws.com/13+Sweater+(Zebulon+Night+3%2C+Los+Angeles).mp3')
song_1_13.song_file.attach(io: song_file_1_13, filename:'13+Sweater+(Zebulon+Night+3%2C+Los+Angeles).mp3')
song_file_1_14 = open('https://tinnitus-seeds.s3.amazonaws.com/14+953+(The+Earl%2C+Atlanta).mp3')
song_1_14.song_file.attach(io: song_file_1_14, filename:'14+953+(The+Earl%2C+Atlanta).mp3')
song_file_1_15 = open('https://tinnitus-seeds.s3.amazonaws.com/15+John+L+(Constellation%2C+Chicago).mp3')
song_1_15.song_file.attach(io: song_file_1_15, filename:'15+John+L+(Constellation%2C+Chicago).mp3')
song_file_1_16 = open('https://tinnitus-seeds.s3.amazonaws.com/16+bmbmbm+Ft.+Fat+Tony+(Warsaw%2C+Brooklyn).mp3')
song_1_16.song_file.attach(io: song_file_1_16, filename:'16+bmbmbm+Ft.+Fat+Tony+(Warsaw%2C+Brooklyn).mp3')

# post = Post.first
# file = File.open('app/assets/images/sennacy.jpg')
# post.photo.attach(io: file, filename: 'sennacy.jpg')
# post.photo.attached? # => true