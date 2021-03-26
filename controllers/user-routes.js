const router = require('express').Router();
const { Users } = require('../models');

router.get('/:id', (req, res) => {
  Users.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
  })
})

module.exports = router;