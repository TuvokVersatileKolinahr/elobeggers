import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const goalSchema = new mongoose.Schema({
  player: { type: Schema.ObjectId, ref: 'Player' },
  position: String,
  color: String,
  own: Boolean,
  teamId: { type: Schema.ObjectId, ref: 'Team' }
});

const Goal = mongoose.model('Goal', goalSchema);

export default Goal;
