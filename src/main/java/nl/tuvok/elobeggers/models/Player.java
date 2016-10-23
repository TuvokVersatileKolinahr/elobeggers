package nl.tuvok.elobeggers.models;

import java.util.Date;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

@Entity("players")
public class Player {
	@Id
	private String id;

	public String name;
	public int elo;
	public Date joined;
	public Date lastPlayed;
	public User user;
}
