import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const playerSchema = new mongoose.Schema({
  name: String,
  elo: Number,
  joinDate: Date,
  lastPlayed: [Date],
  retired: Boolean,
  retiredDate: Date,
  belongsTo: String
});

const Player = mongoose.model('Player', playerSchema);

export default Player;
