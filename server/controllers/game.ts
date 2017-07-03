import Game from '../models/game';
import BaseCtrl from './base';

export default class GameCtrl extends BaseCtrl {
  model = Game;

  // Get all
  getNewest = (req, res) => {
    const lim = parseInt(req.params.lim, 10) || 20;
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    }).sort({ 'date': -1 }).limit(lim);
  };

}
