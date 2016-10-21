package nl.tuvok.elobeggers.services;

import java.util.List;

import org.mongodb.morphia.Datastore;

import com.google.gson.Gson;

import nl.tuvok.elobeggers.models.User;

public class UserService {
	final Datastore datastore;
	
	public UserService(Datastore ds) {
		datastore = ds;
	}

	// returns a list of all users
	public List<User> getAllUsers() {	
		return datastore.find(User.class).asList();
	}

	// returns a single user by id
	public User getUser(String id) {
		return datastore.get(User.class, id);
	}

	// creates a new user
	public User createUser(String name, String email) {
		// make a document and insert it
		final User user = new User();
		user.name = name;
		user.email = email;
		datastore.save(user);
		return user;
	}

	// updates an existing user
	public User updateUser(String id, String name, String email) {
		// ..
		return null;
	}

	// creates a new used based on a json string
	public User createUser(String userJson) {
		Gson gson = new Gson();
		User user = gson.fromJson(userJson, User.class);
		datastore.save(user);
		return user;
	}
}
