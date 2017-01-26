var mongoose = require('mongoose');

// Character Trivia Schema
var triviaSchema = mongoose.Schema({
    info: {
        type: String,
        required: true
    }
});

// Character Schema
var characterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    portrayedBy: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    appAndPersonality: {
        type: String,
        required: true
    },
    history: {
        type: String,
        required: true
    },
    trivia: {
        type: [triviaSchema],
        required: false
    },
    pageUrl: {
        type: String,
        required: true
    },
    pictureUrl: {
        type: String,
        required: true
    }
});

var Character = module.exports = mongoose.model('Character', characterSchema);

// Get All Characters
module.exports.getCharactersInfo = function(callback) {
    return Character.find(callback).sort({"name":1}).exec();
};

module.exports.getCharacterBasicInfo = function(callback) {
    return Character.find({},{ name: 1, pageUrl: 1, pictureUrl: 1}, callback).sort({"name":1}).exec();
};