var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

Character = require('../model/character.js');

var characters;

/* GET characters page. */
router.get('/', function(req, res, next) {
    mongoose.connect('mongodb://fabioamp:eu1234@ds127439.mlab.com:27439/penny-dreadfuldb');

    Character.getCharacters()
        .then(function(instance) {
            characters = instance;
            res.render('characters', {
                charactersList: characters
            });
            mongoose.disconnect();
        })
        .catch(function(err){
            mongoose.disconnect();
            console.log(err);
        });
});


module.exports = router;
