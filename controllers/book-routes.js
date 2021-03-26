const router = require('express').Router();
const sequelize = require('../config/connection');
const { Books } = require('../models');

// GETS ALL BOOKS FOR A USER
router.get('/', (req, res) => {
  Books.findAll()
  .then(bookData => res.json(bookData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// CREATES A NEW BOOK IN THE DB BASED ON USER SAVE
router.post('/', (req, res) => {
  Books.create({
    id: req.body.id,
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    published: req.body.published,
    pages: req.body.pages
  })
  .then(bookData => res.json(bookData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;

