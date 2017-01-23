var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

Episode = require('../../model/episode');
Season = require('../../model/season');

var seasonList;
var episodesList;

/* GET season 3 episodes page. */
router.get('/', function(req, res) {
    mongoose.connect('mongodb://localhost/pennydreadful');
    Season.getSeasonByName("Season 3")
        .then(function(instance){
            seasonList = instance;
            return Episode.getEpisodesBySeason(3);
        })
        .then(function(instance){
            episodesList = instance;
            res.render('episodes/season3', {
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
