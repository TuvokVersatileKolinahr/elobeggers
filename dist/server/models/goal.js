"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var goalSchema = new mongoose.Schema({
    player: { type: Schema.ObjectId, ref: 'Player' },
    position: String,
    color: String,
    own: Boolean,
    teamId: { type: Schema.ObjectId, ref: 'Team' }
});
var Goal = mongoose.model('Goal', goalSchema);
exports.default = Goal;
//# sourceMappingURL=goal.js.map