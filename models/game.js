const mongoose = require("mongoose");

const { Schema } = mongoose;

// Define game state details
const gameSchema = new Schema(
  {
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    user: {
      type: String,
      trim: true,
      required: false,
      default: "Tester",
    },
    player1: {
      team: {
        type: String,
      },
      deck: [Object],
    },
    player2: {
      team: {
        type: String,
      },
      deck: [Object],
    },
    turn: {
      type: Boolean,
      required: false,
      default: true,
    },
    hand: {
      type: Object,
      required: true,
      default: {},
    },
  },
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
