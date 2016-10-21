package nl.tuvok.elobeggers.services;

import java.util.List;

import org.mongodb.morphia.Datastore;

import nl.tuvok.elobeggers.models.Game;

public class GameService {
final Datastore datastore;
	
	public GameService(Datastore ds) {
		datastore = ds;
		
		Game game = new Game();
		ds.save(game);
	}

	// returns a list of all users
	public List<Game> getAllGames() {	
		return datastore.find(Game.class).asList();
	}
}
