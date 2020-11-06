const router = require("express").Router();
// const isAuthenticated = require("../config/middleware/isAuthenticated");
const Game = require("../models/game.js");
const {
  getDeck, getGame, setHand, setOppHand, statClick,
} = require("./helpers");

router.get("/:id", async (req, res) => {
  await getGame(req.params.id).then((game) => {
    res.json(game);
  });
});

router.post("/create", async (req, res) => {
  console.log("posting");
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

router.put("/:id/:method", async (req, res) => {
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

module.exports = router;
