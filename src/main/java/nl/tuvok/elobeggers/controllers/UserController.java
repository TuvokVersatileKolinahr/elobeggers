package nl.tuvok.elobeggers.controllers;

import static spark.Spark.*;
import static nl.tuvok.elobeggers.JsonUtil.*;

import nl.tuvok.elobeggers.services.UserService;
import spark.Route;

public class UserController {
	public UserController(final UserService userService) {
		get("/users", (req, res) -> userService.getAllUsers(), json());
		get("/user/:id", (req, res) -> userService.getUser(req.params("id")), json());

//		get("/users", new Route() {
//			@Override
//			public Object handle(spark.Request request, spark.Response response) throws Exception {
//				return userService.getAllUsers();
//			}
//		});
		post("/newuser", new Route() {
			@Override
			public Object handle(spark.Request request, spark.Response response) throws Exception {
				return userService.createUser("test", "test@test.nl");
			}
		}, json());
		// more routes
	}
}
