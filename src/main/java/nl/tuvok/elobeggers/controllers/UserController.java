package nl.tuvok.elobeggers.controllers;

import static spark.Spark.*;

import nl.tuvok.elobeggers.services.UserService;
import spark.Route;

public class UserController {
	public UserController(final UserService userService) {
		get("/users", new Route() {
			@Override
			public Object handle(spark.Request request, spark.Response response) throws Exception {
				return userService.getAllUsers();
			}
		});
		post("/user", new Route() {
			@Override
			public Object handle(spark.Request request, spark.Response response) throws Exception {
				return userService.createUser("test", "test@test.nl");
			}
		});
		// more routes
	}
}