var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

Episode = require('../../model/episode');
Season = require('../../model/season');

var seasonList;
var episodesList;

/* GET season 2 episodes page. */
router.get('/', function(req, res) {
    mongoose.connect('mongodb://localhost/pennydreadful');
/*
    Season.getSeasonByName("Season 2", function(err, season) {
        if(err){
            mongoose.disconnect();
            throw err;
        }
        seasonList = season;
    });

    Episode.getEpisodesBySeason(2, function (err, episodes) {
        if(err){
            mongoose.disconnect();
            throw err;
        }
        episodesList = episodes;

    });
    */

    Season.getSeasonByName("Season 2")
        .then(function(instance){
            seasonList = instance;
            return Episode.getEpisodesBySeason(2);
        })
        .then(function(instance){
            episodesList = instance;
            res.render('episodes/season2', {
                episodesList: episodesList,
                season: seasonList
            });
            mongoose.disconnect();
        })
        .catch(function(err){
            console.log(err);
        });
});

module.exports = router;
