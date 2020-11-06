/* eslint-disable no-underscore-dangle */
const e = require("express");
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

  // Create a game
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
      res.json(game._id);
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

  async function setHand(id) {
    const state = await getGame(id);
    const { player1, player2, turn } = state;
    if (player1.hand.length > 0 || player2.hand.length > 0) {
      return;
    }

    if (turn) {
      player1.hand.push(player1.deck[0]);
      player1.deck.shift();
    } else {
      player2.hand.push(player2.deck[0]);
      player2.deck.shift();
    }
    await state.save();
  }

  async function setOppHand(id) {
    const state = await getGame(id);
    const { turn, player1, player2 } = state;
    if (player1.hand.length > 0 && player2.hand.length > 0) {
      return;
    }

    if (turn) {
      player2.hand.push(player2.deck[0]);
      player2.deck.shift();
    } else {
      player1.hand.push(player1.deck[0]);
      player1.deck.shift();
    }
    await state.save();
  }

  async function decideWinner(turn, result) {
    console.log(turn, result);
    if (turn) {
      if (result > 0) {
        return "player1";
      } if (result < 0) {
        return "player2";
      }
      return "tie";
    }
    if (result > 0) {
      return "player2";
    } if (result < 0) {
      return "player1";
    }
    return "tie";
  }

  async function statClick(id, stat) {
    const state = await getGame(id);
    const statOne = state.player1.hand[0][stat];
    const statTwo = state.player2.hand[0][stat];
    const { turn, count } = state;
    let winner;
    turn ? winner = await decideWinner(turn, statOne - statTwo)
      : winner = await decideWinner(turn, statTwo - statOne);

    console.log(winner);
    state[winner].grave.push(...state.player1.hand, ...state.player2.hand);
    await state.save();
    state.player1.hand = [];
    state.player2.hand = [];
    state.count = count + 1;

    if ((turn && winner === "player2") || (!turn && winner === "player1")) {
      state.turn = !turn;
    }
    await state.save();
  }

  app.put("/api/game/:id/:method", async (req, res) => {
    const { id, method } = req.params;

    switch (method) {
    case "deckClick":
      await setHand(id);
      break;
    case "oppHand":
      await setOppHand(id);
      break;
    case "statClick":
      await statClick(id, req.body.stat);
      break;
    default:
      break;
    }

    const game = await getGame(id);
    res.json(game);
  });
};
