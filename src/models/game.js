const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
  userID: { type: Number, required: true },
  gameType: { type: String, enum: ["Easy", "Medium", "Hard", "Custom"] },
  squares: Number,
  bestScore: Number,
  icon: String
});

const Game = mongoose.model("game", gameSchema);

module.exports = Game;
