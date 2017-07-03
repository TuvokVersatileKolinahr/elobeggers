"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// import Team from './team';
var gameSchema = new mongoose.Schema({
    teamRed: Schema.Types.Mixed,
    teamBlue: Schema.Types.Mixed,
    winner: String,
    teamRedScore: Number,
    teamBlueScore: Number
});
var Game = mongoose.model('Game', gameSchema);
exports.default = Game;
//# sourceMappingURL=game.1.js.map