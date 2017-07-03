"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var playerSchema = new mongoose.Schema({
    name: String,
    elo: Number,
    joinDate: Date,
    lastPlayed: [Date],
    retired: Boolean,
    retiredDate: Date,
    belongsTo: String
});
var Player = mongoose.model('Player', playerSchema);
exports.default = Player;
//# sourceMappingURL=player.js.map