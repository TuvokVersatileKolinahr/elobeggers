# elobeggers

This is a project to replace PLeague, the league app for our companies Fußball league. It is time for a proper v2, so here it is: the ELO-beggers app.

This project contains both the frontend as the backend. The latter is written in java and based on the [SparkJAVA](http://sparkjava.com/) framework. To run the fontend (in an IDE like Eclipse) just start as java-application. This will start a development server running on port 4567, to check open [http://localhost:4567/](http://localhost:4567/) the frontend is compiled in the `src/main/resources/public`-directory.

The frontend has it's own development server which can be installed by changing into the frontend directory:

```
cd frontend
npm install
npm start
```

This will start a server running on [http://localhost:8080/](http://localhost:8080/) wich will proxy to the API backend.
