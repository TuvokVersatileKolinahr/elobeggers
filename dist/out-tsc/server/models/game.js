"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var gameSchema = new mongoose.Schema({
    teamRed: String,
    teamBlue: String,
    winner: String,
    teamRedScore: Number,
    teamBlueScore: Number
});
var Game = mongoose.model('Game', gameSchema);
exports.default = Game;
//# sourceMappingURL=game.js.map