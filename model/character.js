var mongoose = require('mongoose');

// Character Schema
var characterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

var Character = module.exports = mongoose.model('Character', characterSchema);

// Get All Characters
module.exports.getCharacters = function(callback) {
    return Character.find(callback).sort({"name":1}).exec();
};