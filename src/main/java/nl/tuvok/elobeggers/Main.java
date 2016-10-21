package nl.tuvok.elobeggers;


import static spark.Spark.before;
import static spark.Spark.port;
import static spark.Spark.staticFileLocation;
import static spark.Spark.webSocket;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.eclipse.jetty.websocket.api.Session;
import org.json.JSONObject;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;

import nl.tuvok.elobeggers.controllers.GameController;
import nl.tuvok.elobeggers.controllers.UserController;
import nl.tuvok.elobeggers.services.GameService;
import nl.tuvok.elobeggers.services.UserService;

public class Main {
	static Map<Session, String> userUsernameMap = new ConcurrentHashMap<>();
	static int nextUserNumber = 1; // Used for creating the next username
	public static MongoDatabase db;

	public static void main(String[] args) {
		port(4567);
		staticFileLocation("/public"); 
		
		webSocket("/chat", ChatWebSocketHandler.class);
		before((request, response) -> response.type("application/json"));

		// TODO: find a way to cleanly stop and close the client when
		// application stops
		@SuppressWarnings("resource")
		MongoClient mongoClient = new MongoClient("localhost", 27017);
		db = mongoClient.getDatabase("mydb");

		
		final Morphia morphia = new Morphia();

		// tell Morphia where to find your classes
		// can be called multiple times with different packages or classes
		morphia.mapPackage("nl.tuvok.elobeggers.models");

		// create the Datastore connecting to the default port on the local host
		final Datastore datastore = morphia.createDatastore(new MongoClient(), "morphia_example");
		datastore.ensureIndexes();
		
		new UserController(new UserService(datastore));
		new GameController(new GameService(datastore));
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

