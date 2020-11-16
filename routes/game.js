const router = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
const Game = require("../models/game.js");
const {
  getDeck, getGame, setHand, setOppHand, statClick, checkGame,
} = require("./helpers");

router.get("/check", isAuthenticated, async (req, res) => {
  console.log(req.user);
  Game.findOne({ user: req.user.id }).then((game) => {
    res.json(game);
  });
});

router.get("/:id", isAuthenticated, async (req, res) => {
  getGame(req.params.id).then((game) => {
    res.json(game);
  });
});

router.post("/create", isAuthenticated, async (req, res) => {
  console.log("posting");
  console.log(req.user);
  const player1team = req.body.player1.charAt(0).toUpperCase() + req.body.player1.slice(1);
  const player2team = req.body.player2.charAt(0).toUpperCase() + req.body.player2.slice(1);

  const p1Deck = await getDeck(player1team);
  const p2Deck = await getDeck(player2team);

  const state = {
    status: true,
    user: req.user.id,
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

router.put("/:id/:method", isAuthenticated, async (req, res) => {
  const { id, method } = req.params;
  const state = await getGame(id);
  checkGame(state);
  let result = null;
  switch (method) {
  case "deckClick":
    await setHand(id);
    break;
  case "oppHand":
    await setOppHand(id);
    break;
  case "statClick":
    result = await statClick(id, req.body.stat);
    break;
  default:
    break;
  }

  const game = await getGame(id);
  res.json({ game, winner: result });
});

module.exports = router;
