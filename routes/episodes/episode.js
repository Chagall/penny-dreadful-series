var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var connectionString = require('../../public/javascripts/connection/connection-string')

Episode = require('../../model/episode');

/* GET a character's information page. */
router.get('/', function(req, res) {
    // Splits the request url which was divided by '/' to get the tokens
    var baseUrlArrayStrip = req.baseUrl.split("/");
    // Getting the last character of the second token (seasonX) to be the season number
    var seasonNumber = baseUrlArrayStrip[2].charAt(baseUrlArrayStrip[2].length-1);
    var episodeNumber;
    // Getting the last character of the third token (episodeX) if the episode number is not '10',
    // otherwise get the last two characters
    if(Number(baseUrlArrayStrip[3].charAt(baseUrlArrayStrip[3].length-1)) === 0
        && Number(baseUrlArrayStrip[3].charAt(baseUrlArrayStrip[3].length-2)) === 1){
        episodeNumber = Number(""
            + baseUrlArrayStrip[3].charAt(baseUrlArrayStrip[3].length-2)
            + baseUrlArrayStrip[3].charAt(baseUrlArrayStrip[3].length-1));
    }
    else {
        episodeNumber = baseUrlArrayStrip[3].charAt(baseUrlArrayStrip[3].length-1);
    }

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
