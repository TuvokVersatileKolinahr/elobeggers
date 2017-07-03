"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("../models/player");
var base_1 = require("./base");
var mongoose = require("mongoose");
var PlayerCtrl = (function (_super) {
    __extends(PlayerCtrl, _super);
    function PlayerCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = player_1.default;
        // Convert
        _this.convert = function (req, res) {
            _this.model.find({}, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                docs.forEach(function (element) {
                    var myId = mongoose.Types.ObjectId(element._id);
                    var newEl = element;
                    newEl._id = myId;
                    console.log(newEl);
                    _this.model.findOneAndRemove({ _id: req.params.id }, function (delerr) {
                        if (delerr) {
                            return console.error(delerr);
                        }
                        console.log("deleted " + element._id);
                        var obj = new _this.model(newEl);
                        obj.save(function (inserr, item) {
                            // 11000 is the code for duplicate key error
                            if (inserr && inserr.code === 11000) {
                                console.log("duplicate id " + newEl._id);
                            }
                            if (inserr) {
                                return console.error(inserr);
                            }
                            console.log("inserted " + newEl._id);
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
        return _this;
    }
    return PlayerCtrl;
}(base_1.default));
exports.default = PlayerCtrl;
//# sourceMappingURL=player.js.map