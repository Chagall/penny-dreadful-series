var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/*
    Routes Requires
 */
var index = require('./routes/index');
var home = require('./routes/home');
var about = require('./routes/about');
var characters = require('./routes/characters');
var episodes = require('./routes/episodes');
var season1 = require('./routes/episodes/season1');
var season2 = require('./routes/episodes/season2');
var season3 = require('./routes/episodes/season3');

var app = express();
var wesbiteName = "pennydreadfulseries.online";

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
app.use('/', index);
app.use('/home', home);
app.use('/about', about);
app.use('/characters', characters);
app.use('/episodes', episodes);
app.use('/episodes/season1', season1);
app.use('/episodes/season2', season2);
app.use('/episodes/season3', season3);

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
