"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var gameSchema = new mongoose.Schema({
    teamRed: { type: Schema.ObjectId, ref: 'Team' },
    teamBlue: { type: Schema.ObjectId, ref: 'Team' },
    winner: { type: Schema.ObjectId, ref: 'Team' },
    teamRedScore: Number,
    teamBlueScore: Number
});
var Game = mongoose.model('Game', gameSchema);
exports.default = Game;
//# sourceMappingURL=game.js.map