import * as express from 'express';

import UserCtrl from './controllers/user';
import GameCtrl from './controllers/game';
import TeamCtrl from './controllers/team';
import PlayerCtrl from './controllers/player';
import GoalCtrl from './controllers/goal';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const userCtrl = new UserCtrl();
  const gameCtrl = new GameCtrl();
  const teamCtrl = new TeamCtrl();
  const playerCtrl = new PlayerCtrl();
  const goalCtrl = new GoalCtrl();

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
