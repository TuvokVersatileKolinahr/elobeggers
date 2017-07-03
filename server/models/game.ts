import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gameSchema = new mongoose.Schema({
  teamRed: { type: Schema.ObjectId, ref: 'Team' },
  teamBlue: { type: Schema.ObjectId, ref: 'Team' },
  winner: { type: Schema.ObjectId, ref: 'Team' },
  teamRedScore: Number,
  teamBlueScore: Number
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
