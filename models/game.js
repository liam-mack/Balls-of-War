const mongoose = require("mongoose");

const { Schema } = mongoose;

// Define game state details
const gameSchema = new Schema(
  {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
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
      grave: {
        type: [Object],
        required: true,
        unique: true,
      },
      hand: {
        type: [Object],
        required: true,
        unique: true,
      },
    },
    player2: {
      team: {
        type: String,
      },
      deck: [Object],
      grave: {
        type: [Object],
        required: true,
        unique: true,
      },
      hand: {
        type: [Object],
        required: true,
        unique: true,
      },
    },
    turn: {
      type: Boolean,
      trim: true,
      required: true,
      default: true,
    },
  },
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
