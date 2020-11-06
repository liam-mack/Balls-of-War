const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post(
  "/login",
  passport.authenticate("local"),
  async (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  },
);

// Route for signing up a user. The user's password is automatically hashed and stored securely
// thanks to how we configured our Sequelize User Model.
// If the user is created successfully, proceed to log the user in otherwise send back an error
router.post(
  "/signup",
  async (req, res) => {
    console.log(req.user);
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.pass,
    })
      .then(() => {
        console.log("test");
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json(err);
      });
  },
);

module.exports = router;
