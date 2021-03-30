const Books = require('./Books');
const Users = require('./Users');
const Likes = require('./Likes');

Users.belongsToMany(Books, {
  through: Likes,
  foreignKey: 'book_id'
})

Books.belongsToMany(Users, {
  through: Likes,
  foreignKey: 'user_id'
})

module.exports = { Books, Users, Likes };