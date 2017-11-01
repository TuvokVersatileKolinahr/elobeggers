var mongoose = require('mongoose');
var casual = require('casual');
mongoose.connect('mongodb://localhost/pleague');
var logger = require('util');
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
        var fill = new Array(17 - this.name.length).join(' ');
        logger.log(`${this.name}${fill}[${this.elo}]`);
    }

    var Player = mongoose.model('Player', playerSchema);

    Player.find(function(err, players) {
        if (err) return console.error(err);
        // console.log(players);
        players.forEach(function(player) {
            player.speak();
        }, this);
    });
});
