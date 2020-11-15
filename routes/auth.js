const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), async (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id,
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely
// thanks to how we configured our Sequelize User Model.
// If the user is created successfully, proceed to log the user in otherwise send back an error
router.post("/signup", async (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(() => {
      // res.redirect(307, "/api/login");
      res.json(req.user);
    })
    .catch((err) => {
      res.status(401).json({
        err,
        // errors: [
        //   {
        //     msg: "WRONG",
        //   },
        // ],
      });
    });
});

router.get("/user", isAuthenticated, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
