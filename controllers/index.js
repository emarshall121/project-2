const router = require('express').Router();

const bookRoutes = require('./book-routes');
const userRoutes = require('./user-routes');

router.use('/api/books', bookRoutes);
router.use('/api/users', userRoutes);

router.get("/", (req, res) => {
  console.log("You are at the homepage")
  res.render("homepage", {welcome: "Welcome!"})
})

router.get("/dashboard", (req, res) => {
  res.render("dashboard", {dashboard: "Dashboard!"})
})

router.get("/register", (req, res) => {
  res.render("register", {register: "Registration!"})
})

router.get("/login", (req, res) => {
  res.render("login", {login: "Log In Here!"})
})


module.exports = router;