"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_1 = require("./controllers/user");
var game_1 = require("./controllers/game");
function setRoutes(app) {
    var router = express.Router();
    var userCtrl = new user_1.default();
    var gameCtrl = new game_1.default();
    // Games
    router.route('/games').get(gameCtrl.getAll);
    router.route('/games/count').get(gameCtrl.count);
    router.route('/game').post(gameCtrl.insert);
    router.route('/game/:id').get(gameCtrl.get);
    router.route('/game/:id').put(gameCtrl.update);
    router.route('/game/:id').delete(gameCtrl.delete);
    // Users
    router.route('/login').post(userCtrl.login);
    router.route('/users').get(userCtrl.getAll);
    router.route('/users/count').get(userCtrl.count);
    router.route('/user').post(userCtrl.insert);
    router.route('/user/:id').get(userCtrl.get);
    router.route('/user/:id').put(userCtrl.update);
    router.route('/user/:id').delete(userCtrl.delete);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map