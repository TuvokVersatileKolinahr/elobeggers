package nl.tuvok.elobeggers.models;

import java.util.Date;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

@Entity("players")
public class Player {
	@Id
	private ObjectId id;

	public int elo;
	public Date lastPlayed;
	public User user;
}
