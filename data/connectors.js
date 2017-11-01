import Mongoose from 'mongoose';
const mongo = Mongoose.connect('mongodb://pleague:W4nsmaak@ds011482.mlab.com:11482/heroku_fvrtt85g');

const ViewSchema = Mongoose.Schema({
    postId: Number,
    views: Number,
});

const View = Mongoose.model('views', ViewSchema);

export { View };

mongoose.connect('mongodb://localhost/pleague');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!

    var playerSchema = mongoose.Schema({
        name: String,
        elo: Number,
        joinDate: Date
    });

    playerSchema.methods.speak = function() {
        var greeting = this.name ?
            `${this.name} \telo: ${this.elo} \t since ${this.joinDate}` :
            "I don't have a name";
        console.log(greeting);
    }

    var Player = mongoose.model('Player', playerSchema);

    // var fluffy = new Player({ name: casual.name });
    // fluffy.speak(); // "Meow name is fluffy"

    // fluffy.save(function(err, fluffy) {
    //     if (err) return console.error(err);
    //     fluffy.speak();
    // });
    Player.find(function(err, players) {
        if (err) return console.error(err);
        // console.log(players);
        players.forEach(function(player) {
            player.speak();
        }, this);
    });
});
