"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_1 = require("./controllers/user");
var game_1 = require("./controllers/game");
var team_1 = require("./controllers/team");
var player_1 = require("./controllers/player");
var goal_1 = require("./controllers/goal");
function setRoutes(app) {
    var router = express.Router();
    var userCtrl = new user_1.default();
    var gameCtrl = new game_1.default();
    var teamCtrl = new team_1.default();
    var playerCtrl = new player_1.default();
    var goalCtrl = new goal_1.default();
    // Games
    router.route('/games').get(gameCtrl.getAll);
    router.route('/games/:lim').get(gameCtrl.getNewest);
    router.route('/games/count').get(gameCtrl.count);
    router.route('/game').post(gameCtrl.insert);
    router.route('/game/:id').get(gameCtrl.get);
    router.route('/game/:id').put(gameCtrl.update);
    router.route('/game/:id').delete(gameCtrl.delete);
    // Teams
    router.route('/teams').get(teamCtrl.getAll);
    router.route('/teams/count').get(teamCtrl.count);
    router.route('/team').post(teamCtrl.insert);
    router.route('/team/:id').get(teamCtrl.get);
    router.route('/team/:id').put(teamCtrl.update);
    router.route('/team/:id').delete(teamCtrl.delete);
    // Players
    router.route('/players/convert').get(playerCtrl.convert);
    router.route('/players').get(playerCtrl.getAll);
    router.route('/players/count').get(playerCtrl.count);
    router.route('/player').post(playerCtrl.insert);
    router.route('/player/:id').get(playerCtrl.get);
    router.route('/player/:id').put(playerCtrl.update);
    router.route('/player/:id').delete(playerCtrl.delete);
    // Goals
    router.route('/goals').get(goalCtrl.getAll);
    router.route('/goals/count').get(goalCtrl.count);
    router.route('/goal').post(goalCtrl.insert);
    router.route('/goal/:id').get(goalCtrl.get);
    router.route('/goal/:id').put(goalCtrl.update);
    router.route('/goal/:id').delete(goalCtrl.delete);
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