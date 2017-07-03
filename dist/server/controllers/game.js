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
var game_1 = require("../models/game");
var base_1 = require("./base");
var GameCtrl = (function (_super) {
    __extends(GameCtrl, _super);
    function GameCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = game_1.default;
        // Get all
        _this.getNewest = function (req, res) {
            var lim = parseInt(req.params.lim, 10) || 20;
            _this.model.find({}, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.json(docs);
            }).sort({ 'date': -1 }).limit(lim);
        };
        return _this;
    }
    return GameCtrl;
}(base_1.default));
exports.default = GameCtrl;
//# sourceMappingURL=game.js.map