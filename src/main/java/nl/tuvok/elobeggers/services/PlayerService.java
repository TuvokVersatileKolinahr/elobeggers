package nl.tuvok.elobeggers.services;

import java.util.Date;
import java.util.List;

import org.mongodb.morphia.Datastore;

import com.google.gson.Gson;

import nl.tuvok.elobeggers.models.Player;

public class PlayerService {
	final Datastore datastore;
	
	public PlayerService(Datastore ds) {
		datastore = ds;
	}

	// returns a list of all players
	public List<Player> getPlayers() {	
		return datastore.find(Player.class).asList();
	}

	// returns a single player by id
	public Player getPlayer(String id) {
		return datastore.get(Player.class, id);
	}

	// creates a new player
	public Player createPlayer(Player player) {
		// make a document and insert it
		if (player == null)
			player = new Player();
		player.elo = 1500;
		player.joined = new Date();
		datastore.save(player);
		return player;
	}

	// creates a new player based on a json string
	public Player createPlayer(String playerJson) {
		Gson gson = new Gson();
		Player player = gson.fromJson(playerJson, Player.class);
		return createPlayer(player);
	}

	// updates an existing player
	public Player updatePlayer() {
		// ..
		return null;
	}
}
