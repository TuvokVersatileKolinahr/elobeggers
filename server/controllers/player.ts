import Player from '../models/player';
import BaseCtrl from './base';
import * as mongoose from 'mongoose';

export default class PlayerCtrl extends BaseCtrl {
  model = Player;

  // Convert
  convert = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      docs.forEach(element => {

        const myId = mongoose.Types.ObjectId(element._id)
        const newEl = element;
        newEl._id = myId;
        console.log(newEl);

        this.model.findOneAndRemove({ _id: req.params.id }, (delerr) => {
          if (delerr) { return console.error(delerr); }
          console.log(`deleted ${element._id}`);
          const obj = new this.model(newEl);
          obj.save((inserr, item) => {
            // 11000 is the code for duplicate key error
            if (inserr && inserr.code === 11000) {
              console.log(`duplicate id ${newEl._id}`);
            }
            if (inserr) {
              return console.error(inserr);
            }
            console.log(`inserted ${newEl._id}`);
          });
        });


        // this.model.findOneAndUpdate({ _id: element._id }, newEl, (updateerr) => {
        //   if (updateerr) { return console.error(updateerr); }
        //   // res.sendStatus(200);
        // });

      });
      res.json(docs);
    }).sort({ 'date': -1 });
  };
}
