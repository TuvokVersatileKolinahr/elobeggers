package nl.tuvok.elobeggers.models;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

@Entity("users")
public class User {
	@Id
	private String id;
	
	public String name;
	public String email;
}