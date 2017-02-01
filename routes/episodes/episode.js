var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var connectionString = require('../../public/javascripts/connection/connection-string')

Episode = require('../../model/episode');

/* GET a character's information page. */
router.get('/', function(req, res) {
    var baseUrlArrayStrip = req.baseUrl.split("/");
    var seasonNumber = baseUrlArrayStrip[2].charAt(baseUrlArrayStrip[2].length-1);
    var episodeNumber = baseUrlArrayStrip[3].charAt(baseUrlArrayStrip[3].length-1);

    mongoose.connect(connectionString.getConnectionString());

    Episode.getEpisodeInfo(seasonNumber,episodeNumber)
        .then(function(result){
            res.render('episodes/episode', {
                episodeInfo: result
            });
            mongoose.disconnect();
        })
        .catch(function(err){
            mongoose.disconnect();
            console.log(err);
        });
});

module.exports = router;
