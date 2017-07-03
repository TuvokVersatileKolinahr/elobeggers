import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const teamSchema = new mongoose.Schema({
  players: [
    { type: Schema.ObjectId, ref: 'Player' }
    // http://mongoosejs.com/docs/populate.html
    // http://mongoosejs.com/docs/api.html#model_Model.aggregate
  ],
  elo: Number,
});

const Team = mongoose.model('Team', teamSchema);

export default Team;
