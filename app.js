var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/*
    Route Requirements of the Application
 */
var home = require('./routes/home');
var about = require('./routes/about');
var characters = require('./routes/characters');
var season1 = require('./routes/episodes/season1');
var season2 = require('./routes/episodes/season2');
var season3 = require('./routes/episodes/season3');
var character = require('./routes/characters/character');
var episode = require('./routes/episodes/episode');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
console.log(path.join(__dirname, 'public', 'favicon.ico').toString());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
    Uses
*/
app.use('/', home);
app.use('/about', about);
app.use('/characters', characters);
app.use('/episodes/season1', season1);
app.use('/episodes/season2', season2);
app.use('/episodes/season3', season3);
/*
    Each series Character is routed through /routes/characters/character.js
    And there it is resolved whose information should be loaded on the
    web page
 */
app.use('/characters/abraham_van_helsing', character);
app.use('/characters/angelique', character);
app.use('/characters/bartholomew_rusk', character);
app.use('/characters/brona_croft', character);
app.use('/characters/captain_branson', character);
app.use('/characters/caroline_frankenstein', character);
app.use('/characters/catriona_hartdegen', character);
app.use('/characters/claire_ives', character);
app.use('/characters/creature', character);
app.use('/characters/dorian_gray', character);
app.use('/characters/dracula', character);
app.use('/characters/ethan_chandler', character);
app.use('/characters/evelyn_poole', character);
app.use('/characters/fenton', character);
app.use('/characters/ferdinand_lyle', character);
app.use('/characters/florence_seward', character);
app.use('/characters/gladys_murray', character);
app.use('/characters/gordon_ives', character);
app.use('/characters/hecate_poole', character);
app.use('/characters/henry_jekyll', character);
app.use('/characters/jared_talbot', character);
app.use('/characters/joan_clayton', character);
app.use('/characters/justine', character);
app.use('/characters/kaetenay', character);
app.use('/characters/lavinia_putney', character);
app.use('/characters/lucifer', character);
app.use('/characters/mina_murray', character);
app.use('/characters/octavia_putney', character);
app.use('/characters/oscar_putney', character);
app.use('/characters/peter_murray', character);
app.use('/characters/proteus', character);
app.use('/characters/renfield', character);
app.use('/characters/sembene', character);
app.use('/characters/sir_geoffrey_hawkes', character);
app.use('/characters/sir_malcolm_murray', character);
app.use('/characters/vanessa_ives', character);
app.use('/characters/victor_frankenstein', character);
app.use('/characters/vincent_brand', character);
app.use('/characters/warren_roper', character);
/*
 Each series Episode is routed through /routes/episodes/episode.js
 And there it is resolved which episode's information should be loaded
 on the web page
 */
app.use('/episodes/season1/episode1', episode);
app.use('/episodes/season1/episode2', episode);
app.use('/episodes/season1/episode3', episode);
app.use('/episodes/season1/episode4', episode);
app.use('/episodes/season1/episode5', episode);
app.use('/episodes/season1/episode6', episode);
app.use('/episodes/season1/episode7', episode);
app.use('/episodes/season1/episode8', episode);
app.use('/episodes/season2/episode1', episode);
app.use('/episodes/season2/episode2', episode);
app.use('/episodes/season2/episode3', episode);
app.use('/episodes/season2/episode4', episode);
app.use('/episodes/season2/episode5', episode);
app.use('/episodes/season2/episode6', episode);
app.use('/episodes/season2/episode7', episode);
app.use('/episodes/season2/episode8', episode);
app.use('/episodes/season2/episode9', episode);
app.use('/episodes/season2/episode10', episode);
app.use('/episodes/season3/episode1', episode);
app.use('/episodes/season3/episode2', episode);
app.use('/episodes/season3/episode3', episode);
app.use('/episodes/season3/episode4', episode);
app.use('/episodes/season3/episode5', episode);
app.use('/episodes/season3/episode6', episode);
app.use('/episodes/season3/episode7', episode);
app.use('/episodes/season3/episode8', episode);
app.use('/episodes/season3/episode9', episode);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);

    // render the error page
    if(err.status == 404){
      res.render('error/404', {
          title: '404 - Page not Found'});
    }
    else {
      res.render('error/error');
    }

});

app.get('/report/:chart_id/:user_id', function (req, res) {
    //authenticate user_id, get chart_id obfuscated url
    //send image binary with correct headers
});

module.exports = app;
