const router = require('express').Router();
// const { Users, Like, Books } = require('../models');
const Users = require('../models/Users');
const Like = require('../models/like');
const Books = require('../models/Books');


router.get('/:id', (req, res) => {
  Users.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    // include: [
    //   {
    //     model: Like,
    //     attributes: ['book_id']
    //   }
    // ]
  })
  .then(dbUserData => {
    if(!dbUserData){
      res.status(404).json({ message: 'No user found with this id'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).status.json(err);
  })
})

router.post('/login', (req, res) => {
  Users.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if(!dbUserData) {
      res.status(400).json({ message: `no user found with that email address!`});
      return;
    }
    
    const validPassword = dbUserData.checkPassword(req.body.password);

    if(!validPassword){
      res.status(400).json({ message: "Incorrect Password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
      document.location.replace('/dashboard');
    })
  })
})

router.post('/', (req, res) => {
  console.log("You hit the user creation route!")
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  Users.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  Users.findAll({
    attributes: {exclude: ['password']}
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;