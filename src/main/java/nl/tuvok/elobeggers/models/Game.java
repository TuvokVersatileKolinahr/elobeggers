package nl.tuvok.elobeggers.models;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

@Entity("games")
public class Game {
	@Id
	private ObjectId id;
	
	Team red = new Team();
	Team blue = new Team();
	String startTime = Instant.now().toString();
	List<Goal> goals = new ArrayList<Goal>();
	
	
	public Instant getStartTime() {
		return Instant.parse(startTime);
	}
	
	public static class Goal {
		ObjectId player;
		long gameTime;
	}
	
	public static class Team {
		ObjectId offencePlayer;
		ObjectId defencePlayer;
	}
}
