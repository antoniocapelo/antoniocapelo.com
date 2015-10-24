var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var querystring = require('querystring');


var app = express();
var apiModule = require('./api-module');

// view engine setup - erased :)
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));

app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
// Adding Robots.txt response middleware
app.use(function(req, res, next) {
    if ('/robots.txt' == req.url) {
        res.type('text/plain')
        res.send("User-agent: *\nDisallow: /");
    } else {
        next();
    }
});

/**
 * New Development Settings - for AngularJS
 */
if (app.get('env') === 'development') {
    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));

    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {

    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

/* Setting up the api module routing */
app.get('/api/*', function(req, res) {
    apiModule.handleApiRequest(req, res, app);
})

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: 'd9f3450037fc4dd0aaa928c7860d728f',
    clientSecret: '246ac78af1d9496091fd971d5778b02a',
    redirectUri: app.get('env') === 'development' ? 'http://localhost/aux/spotifyCallback' : 'http://www.antoniocapelo.com/aux/spotifyCallback'
});


app.use('/http', express.static(path.join(__dirname, 'extraPages/httpList')));



module.exports = app;
