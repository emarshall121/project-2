const router = require('express').Router();

const bookRoutes = require('./book-routes');
const userRoutes = require('./user-routes');

router.use('/api/books', bookRoutes);
router.use('/api/users', userRoutes);

module.exports = router;