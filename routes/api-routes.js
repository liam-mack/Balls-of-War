const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely
  // thanks to how we configured our Sequelize User Model.
  // If the user is created successfully, proceed to log the user in otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.user);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  app.get("/api/:team", async (req, res) => {
    const deck = await db[req.params.team].findAll({});
    // console.log(deck[0].dataValues);
    const modifiedDeck = deck.map((element) => element.dataValues);

    // Fisher yates shuffle
    for (let i = modifiedDeck.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * i);
      const temp = modifiedDeck[i];
      modifiedDeck[i] = modifiedDeck[j];
      modifiedDeck[j] = temp;
    }
    res.json(modifiedDeck);
  });

  app.post("/api/lakers", async (req, res) => {
    const player = await db.Lakers.create({
    // id: uuidv4(),
      name: "Shamik",
      position: "SG",
      jersey: 2,
      height: "6'4",
      weight: 280,
      points: 32,
      fieldgoal: 0.45,
      rebounds: 11,
      assists: 12,
      personalfouls: 0.2,
      image: null,
    });
    res.json(player);
    console.log(player);
  });
};
