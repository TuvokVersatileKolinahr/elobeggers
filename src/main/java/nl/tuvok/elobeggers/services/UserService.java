package nl.tuvok.elobeggers.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.ReflectionDBObject;

import nl.tuvok.elobeggers.Main;
import nl.tuvok.elobeggers.models.User;

public class UserService {
//	DBCollection coll;
	User nullUser;
	final Datastore datastore;
	
	public UserService() {
//		Set<String> collectionNames = Main.db.getCollectionNames();
//		for (final String s : collectionNames) {
//			System.out.println(s);
//		}
//		// get a collection object to work with
//		coll = Main.db.getCollection("testCollection");

		// drop all the data in it
		// coll.drop();

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
		// ..
		// Count all documents in a collection but take a maximum second to do
		// so
		// coll.find().maxTime(1, SECONDS).count();
//		BasicDBObject query = new BasicDBObject("i", 71);
//
//		DBCursor cursor = coll.find(query);
//
//		try {
//			while (cursor.hasNext()) {
//				System.out.println(cursor.next());
//			}
//		} finally {
//			cursor.close();
//		}

		return nullUser;
	}

	// creates a new user
	public User createUser(String name, String email) {
		// make a document and insert it
//		BasicDBObject doc = new BasicDBObject("name", "MongoDB").append("type", "database").append("count", 1)
//				.append("info", new BasicDBObject("x", 203).append("y", 102));
//
//		coll.insert(doc);
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
}
