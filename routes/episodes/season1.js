var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

Episode = require('../../model/episode');
Season = require('../../model/season');

var seasonList;
var episodesList;

/* GET season 1 episodes page. */
router.get('/', function(req, res) {
    mongoose.connect('mongodb://localhost/pennydreadful');
/*

    Season.getSeasonByName("Season 1", function(err, season) {
        console.log("### retorno get season");
        console.log(err);
        console.log(season);
        if(err){
            mongoose.disconnect();
            console.log(err);
        }
        seasonList = season;

        Episode.getEpisodesBySeason(1, function (err, episodes) {
            console.log("### retorno get episodes");
            console.log(err);
            console.log(episodes);
            if(err){
                mongoose.disconnect();
                console.log(err);
            }
            episodesList = episodes;

            res.render('episodes/season1', {
                episodesList: episodesList,
                season: seasonList
            });
            mongoose.disconnect();
        });

    });
*/

    Season.getSeasonByName("Season 1")
        .then(function(instance){
            seasonList = instance;
            return Episode.getEpisodesBySeason(1);
        })
        .then(function(instance){
            episodesList = instance;
            res.render('episodes/season1', {
                episodesList: episodesList,
                season: seasonList
            });
            mongoose.disconnect();
        })
        .catch(function(err){
            mongoose.disconnect();
            console.log(err);
        });
});

module.exports = router;
