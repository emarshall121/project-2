const Books = require('./Books');
const Users = require('./Users');
const Like = require('./like');

// Users.hasMany(Books, {
//   foreignKey: 'book_id'
// })

module.exports = { Books, Users, Like };