package nl.tuvok.elobeggers.controllers;

import static nl.tuvok.elobeggers.JsonUtil.json;
import static spark.Spark.get;
import static spark.Spark.post;

import nl.tuvok.elobeggers.services.UserService;
import spark.Route;

public class UserController {
	public UserController(final UserService userService) {
		get("/users", (req, res) -> userService.getAllUsers(), json());
		post("/user", "application/json", new Route() {
			@Override
			public Object handle(spark.Request request, spark.Response response) throws Exception {
				return userService.createUser(request.body());
			}
		}, json());
	}
}