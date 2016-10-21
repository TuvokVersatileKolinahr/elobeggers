package nl.tuvok.elobeggers.controllers;

import static nl.tuvok.elobeggers.JsonUtil.json;
import static spark.Spark.before;
import static spark.Spark.get;
import static spark.Spark.post;

import nl.tuvok.elobeggers.services.UserService;

public class UserController {
	public UserController(final UserService userService) {
		before((request, response) -> response.type("application/json"));

		get("/users", (req, res) -> userService.getAllUsers(), json());
		
		post("/user", "application/json", (req, res) -> userService.createUser(req.body()), json());
	}
}