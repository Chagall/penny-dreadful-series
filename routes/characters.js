var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var connectionString = require('../public/javascripts/connection/connection-string')

Character = require('../model/character.js');

var characters;

/* GET characters page. */
router.get('/', function(req, res, next) {
    mongoose.connect(connectionString.getConnectionString());

    Character.getCharacterBasicInfo()
        .then(function(instance) {
            res.render('characters', {
                charactersList: instance
            });
            mongoose.disconnect();
        })
        .catch(function(err){
            mongoose.disconnect();
            console.log(err);
        });
});


module.exports = router;
