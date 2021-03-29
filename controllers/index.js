const router = require('express').Router();

const bookRoutes = require('./book-routes');
const userRoutes = require('./user-routes');
const savedBookRoutes = require('./saved-book-routes');

router.use('/api/books', bookRoutes);
router.use('/api/users', userRoutes);
router.use('/api/books/savedBooks', savedBookRoutes);

module.exports = router;