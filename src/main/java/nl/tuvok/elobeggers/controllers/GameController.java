package nl.tuvok.elobeggers.controllers;

import static nl.tuvok.elobeggers.JsonUtil.json;
import static spark.Spark.get;

import nl.tuvok.elobeggers.services.GameService;

public class GameController {
	public GameController(final GameService gameService) {

		get("/games", (req, res) -> gameService.getAllGames(), json());
		
	}
}
