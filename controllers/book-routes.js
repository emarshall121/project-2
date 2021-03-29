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

router.get('/:id', (req, res) => {
  Books.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(bookData => {
    if(!bookData){
      res.status(400).json({ message: "Book was not found" });
      return;
    }
    res.json(bookData);
  })
  .catch(err => {
    console.log(err);
    res.status(404).json(err);
  })
})

// CREATES A NEW BOOK IN THE DB BASED ON USER SAVE
router.post('/', (req, res) => {
  Books.create({
    id: req.body.id,
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    published: req.body.published,
    pages: req.body.apges
  })
  .then(bookData => res.json(bookData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;

