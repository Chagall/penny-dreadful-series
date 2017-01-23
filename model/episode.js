var mongoose = require('mongoose');

// Episode Schema
var episodeSchema = mongoose.Schema({
    season: {
        type: Number,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    writtenBy: {
        type: String,
        required: true
    },
    directedBy: {
        type: String,
        required: true
    },
    airingDate: {
        type: String,
        required: true
    },
    usViewers: {
        type: Number,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
});

var Episode = module.exports = mongoose.model('Episode', episodeSchema);

// Get All Episodes
module.exports.getEpisodes = function(callback, limit) {
    Episode.find(callback).limit(limit);
};

// Get Episodes By Season
module.exports.getEpisodesBySeason = function(number, callback) {
    return Episode.find({"season": number}, callback).sort({"number":1}).exec();
};