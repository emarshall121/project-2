const router = require('express').Router();
// const { Model } = require('sequelize/types');
const sequelize = require('../config/connection');
const { Books, Users, Likes } = require('../models');

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
    },
    include: [
      {
        model: Users,
        attributes: ['id', 'email']
      }
    ]
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
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    published: req.body.published,
    pages: req.body.pages,

  })
  .then(bookData => {

      //get book id and user id
    Likes.create({
      
    })
    
    res.json(bookData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

  if(false /*book is being created for the first time ever*/){
    Books.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      published: req.body.published,
      pages: req.body.pages,

    })
    .then(bookData => {


      Likes.create({

      })
      
      res.json(bookData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  } else {



  }


});

module.exports = router;

