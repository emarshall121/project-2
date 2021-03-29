const sequelize = require('../config/connection');
const { Books, Like, Users } = require('../models');
const User = require('../models/Users');

const userData  = [
  {
    email: 'test1@test.com',
    password: 'test1'
  },
  {
    email: 'test2@test.com',
    password: 'test2'
  },
  {
    email: 'test3@test.com',
    password: 'test3'
  }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;