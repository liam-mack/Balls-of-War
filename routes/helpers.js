/* eslint-disable consistent-return */
const db = require("../models");
const Game = require("../models/game.js");

const getDeck = async (team) => {
  const deck = await db[team].findAll({});
  const modifiedDeck = deck.map((element) => element.dataValues);

  // Fisher yates shuffle
  for (let i = modifiedDeck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = modifiedDeck[i];
    modifiedDeck[i] = modifiedDeck[j];
    modifiedDeck[j] = temp;
  }

  return modifiedDeck;
};

const getGame = async (id) => Game.findById(id);

const checkGame = async (game) => {
  const { status, player1 } = game;
  // console.log(status, player1, player2);
  if (!status) {
    return;
  }
  if (player1 === 0) {
    console.log("needs work");
  }
};

const setHand = async (id) => {
  const state = await getGame(id);
  const { player1, player2, turn } = state;
  if (player1.hand.length > 0 || player2.hand.length > 0) {
    return;
  }

  if (turn) {
    player1.hand.unshift(player1.deck[0]);
    player1.deck.shift();
  } else {
    player2.hand.unshift(player2.deck[0]);
    player2.deck.shift();
  }
  await state.save();
};

const setOppHand = async (id) => {
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
};

const decideWinner = (turn, result) => {
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
};

const heightToNumber = (stat) => {
  const feet = stat[0];
  const inches = stat.slice(2);
  const height = feet * 12 + inches;
  return height;
};

const statClick = async (id, stat) => {
  const state = await getGame(id);
  let statOne;
  let statTwo;
  if (stat === "height") {
    statOne = heightToNumber(state.player1.hand[0][stat]);
    statTwo = heightToNumber(state.player2.hand[0][stat]);
  } else {
    statOne = state.player1.hand[0][stat];
    statTwo = state.player2.hand[0][stat];
  }
  const { turn, count } = state;

  let winner;
  turn ? winner = decideWinner(turn, statOne - statTwo)
    : winner = decideWinner(turn, statTwo - statOne);

  if (winner === "tie") {
    await setHand(id);
    return;
  }

  if (stat === "turnovers" || stat === "personalfouls") {
    if (winner === "player1") {
      winner = "player2";
    } else if (winner === "player2") {
      winner = "player1";
    }
  }
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
  return winner;
};

module.exports = {
  getDeck, setHand, setOppHand, decideWinner, statClick, getGame, checkGame,
};
