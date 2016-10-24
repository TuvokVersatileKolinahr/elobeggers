package nl.tuvok.elobeggers.controllers;
import static nl.tuvok.elobeggers.JsonUtil.json;
import static spark.Spark.before;
import static spark.Spark.get;
import static spark.Spark.post;

import nl.tuvok.elobeggers.services.PlayerService;

public class PlayerController {
	public PlayerController(final PlayerService playerService) {
		before((request, response) -> response.type("application/json"));

		get("/api/player/:id", (req, res) -> playerService.getPlayer(req.params("id")), json());
		get("/api/players", (req, res) -> playerService.getPlayers(), json());
		
		post("/api/player", "application/json", (req, res) -> playerService.createPlayer(req.body()), json());
	}
}
