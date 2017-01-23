var mongoose = require('mongoose');

// Season Schema
var seasonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    numberOfEpisodes: {
        type: Number,
        required: true
    },
    premiereDate: {
        type: Date,
        required: true
    },
    finaleDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    }
});

var Season = module.exports = mongoose.model('Season', seasonSchema);

// Get Season By Name
module.exports.getSeasonByName = function(name, callback){
    return Season.findOne({"name": name}, callback).exec();
};