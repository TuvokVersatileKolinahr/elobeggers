package nl.tuvok.elobeggers;

import static spark.Spark.*;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.eclipse.jetty.websocket.api.Session;
import org.json.*;

import com.mongodb.DB;
import com.mongodb.MongoClient;

import nl.tuvok.elobeggers.controllers.UserController;
import nl.tuvok.elobeggers.services.UserService;

public class Main {
	static Map<Session, String> userUsernameMap = new ConcurrentHashMap<>();
	static int nextUserNumber = 1; // Used for creating the next username
	public static DB db;

	public static void main(String[] args) {
		port(4567);
		staticFileLocation("/public"); 
		
		webSocket("/chat", ChatWebSocketHandler.class);
		get("/hello", (req, res) -> "Hello World");

		MongoClient mongoClient = new MongoClient("localhost", 27017);
		db = mongoClient.getDB("mydb");

		new UserController(new UserService());
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

