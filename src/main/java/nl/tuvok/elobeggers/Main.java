package nl.tuvok.elobeggers;

import static spark.Spark.init;
import static spark.Spark.staticFileLocation;
import static spark.Spark.webSocket;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.eclipse.jetty.websocket.api.Session;
import org.json.JSONObject;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;

import nl.tuvok.elobeggers.controllers.UserController;
import nl.tuvok.elobeggers.services.UserService;

public class Main {
	static Map<Session, String> userUsernameMap = new ConcurrentHashMap<>();
	static int nextUserNumber = 1; // Used for creating the next username
	public static MongoDatabase db;

	public static void main(String[] args) {
		staticFileLocation("/public"); // index.html is served at localhost:4567

		webSocket("/chat", ChatWebSocketHandler.class);

		// TODO: find a way to cleanly stop and close the client when
		// application stops
		@SuppressWarnings("resource")
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		db = mongoClient.getDatabase("mydb");

		new UserController(new UserService());
		init();
	}

	// Sends a message from one user to all users, along with a list of current
	// usernames
	public static void broadcastMessage(String sender, String message) {
		userUsernameMap.keySet().stream().filter(Session::isOpen).forEach(session -> {
			try {
				session.getRemote().sendString(
						String.valueOf(new JSONObject().put("userMessage", createHtmlMessageFromSender(sender, message))
								.put("userlist", userUsernameMap.values())));
			} catch (Exception e) {
				e.printStackTrace();
			}
		});
	}

	private static String createHtmlMessageFromSender(String sender, String message) {
		return "User " + sender + ", says: " + message + "<br>";
	}

}
