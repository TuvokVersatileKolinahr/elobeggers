"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var teamSchema = new mongoose.Schema({
    players: [
        { type: Schema.ObjectId, ref: 'Player' }
        // http://mongoosejs.com/docs/populate.html
        // http://mongoosejs.com/docs/api.html#model_Model.aggregate
    ],
    elo: Number,
});
var Team = mongoose.model('Team', teamSchema);
exports.default = Team;
//# sourceMappingURL=team.js.map