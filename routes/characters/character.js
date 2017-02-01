var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var connectionString = require('../../public/javascripts/connection/connection-string')

Character = require('../../model/character');

var seasonList;
var episodesList;

/* GET a character's information page. */
router.get('/', function(req, res) {
    mongoose.connect(connectionString.getConnectionString());

    Character.getCharacterInfoByPageUrl(req.baseUrl)
        .then(function(result){
            res.render('characters/character', {
                characterInfo: result
            });
            mongoose.disconnect();
        })
        .catch(function(err){
            mongoose.disconnect();
            console.log(err);
        });
});

module.exports = router;
