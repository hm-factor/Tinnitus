# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create!({
  username: "Demo", 
  password: "demodemo",
  email: "demo@demo.com",
  birth_date: "02/02/2020",
  gender: "non-binary"
})

