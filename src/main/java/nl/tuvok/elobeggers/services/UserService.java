package nl.tuvok.elobeggers.services;

import java.util.ArrayList;
import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.google.gson.Gson;
import com.mongodb.MongoClient;

import nl.tuvok.elobeggers.models.User;

public class UserService {
	User nullUser;
	final Datastore datastore;
	
	public UserService() {
		final Morphia morphia = new Morphia();

		// tell Morphia where to find your classes
		// can be called multiple times with different packages or classes
		morphia.mapPackage("nl.tuvok.elobeggers.models");

		// create the Datastore connecting to the default port on the local host
		datastore = morphia.createDatastore(new MongoClient(), "morphia_example");
		datastore.ensureIndexes();

		
		nullUser = new User();
		nullUser.name = "Null";
		nullUser.email = "null@nothing.com";
	}

	// returns a list of all users
	public List<User> getAllUsers() {
		// ..
		List<User> ret = new ArrayList<User>();
		ret.add(nullUser);
		return ret;
	}

	// returns a single user by id
	public User getUser(String id) {
		return nullUser;
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
