/* eslint-disable no-underscore-dangle */
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const Game = require("../models/game.js");

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

  // app.get("/selection", isAuthenticated, async (req, res) => {
  //   res.json(true);
  // });

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

  async function getDeck(team) {
    const deck = await db[team].findAll({});
    // console.log(deck[0].dataValues);
    const modifiedDeck = deck.map((element) => element.dataValues);

    // Fisher yates shuffle
    for (let i = modifiedDeck.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * i);
      const temp = modifiedDeck[i];
      modifiedDeck[i] = modifiedDeck[j];
      modifiedDeck[j] = temp;
    }

    return modifiedDeck;
  }

  app.post("/api/game", async (req, res) => {
    const player1team = req.body.player1.charAt(0).toUpperCase() + req.body.player1.slice(1);
    const player2team = req.body.player2.charAt(0).toUpperCase() + req.body.player2.slice(1);

    const p1Deck = await getDeck(player1team);
    const p2Deck = await getDeck(player2team);

    const state = {
      status: true,
      player1: {
        team: player1team, deck: p1Deck,
      },
      player2: {
        team: player2team, deck: p2Deck,
      },
    };
    Game.create(state).then((game) => {
      res.redirect(`/play/${game._id}`);
    });
  });

  app.get("/api/game/:id", async (req, res) => {
    Game.findById(req.params.id).then((game) => {
      res.json(game);
    });
  });

  async function getGame(id) {
    return Game.findById(id);
  }

  // const updated = await Game.findByIdAndUpdate((state._id), { turn: false });

  async function deckClick(id) {
    const state = await getGame(id);
    if (state.turn) {
      console.log("player1 hand set");
      await Game.findByIdAndUpdate((state._id), { hand: state.player1.deck[0] });
      // await Game.findByIdAndUpdate((state._id), { turn: false });
      return;
    }
    await Game.findByIdAndUpdate(state._id, { hand: state.player2.deck[0] });
    // await Game.findByIdAndUpdate((state._id), { turn: true });
    console.log("player2 hand set");
  }

  async function statClick(id, stat) {
    const state = await getGame(id);
    const statOne = state.player1.deck[0][stat];
    const statTwo = state.player2.deck[0][stat];
    let result = statOne - statTwo;
    // state.turn - flip result if state.turn is false

    return result;
  }

  app.put("/api/game/:id/:method", async (req, res) => {
    const { id, method } = req.params;

    switch (method) {
    case "deckClick":
      await deckClick(id);
      break;
    case "statClick":
      await statClick(id, req.body.id);
      break;
    default:
      break;
    }
    // if (req.params.method === "deckClick") {
    //   console.log(id);
    //   await deckClick(id);
    // } else if (req.params.method === "statClick" && req.body) {
    //   const { stat } = req.body;
    //   const { player1, player2 } = state;

    //   await decideTurn(statClick(player1.deck[0][stat], player2.deck[0][stat]));
    // }

    const game = await getGame(id);
    res.json(game);
  });
};
