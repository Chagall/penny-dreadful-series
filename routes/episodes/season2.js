var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

Episode = require('../../model/episode');
Season = require('../../model/season');

var seasonList;
var episodesList;

/* GET season 2 episodes page. */
router.get('/', function(req, res) {
    mongoose.connect('mongodb://fabioamp:eu1234@ds127439.mlab.com:27439/penny-dreadfuldb');

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
            mongoose.disconnect();
            console.log(err);
        });
});

module.exports = router;
