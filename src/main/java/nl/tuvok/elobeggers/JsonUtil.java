package nl.tuvok.elobeggers;

import java.io.IOException;

import org.bson.types.ObjectId;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

import spark.ResponseTransformer;

public class JsonUtil {
	public static String toJson(Object object) {
		
		final GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.registerTypeAdapter(ObjectId.class, new TypeAdapter<ObjectId>(){

			@Override
			public void write(JsonWriter out, ObjectId value) throws IOException {
				out.value(value==null?null:value.toString());
			}

			@Override
			public ObjectId read(JsonReader in) throws IOException {
				//TODO test this
				return new ObjectId(in.nextString());
			}
			
		});
		
		final Gson gson = gsonBuilder.create();
		
		return gson.toJson(object);
	}

	public static ResponseTransformer json() {
		return JsonUtil::toJson;
	}
}
