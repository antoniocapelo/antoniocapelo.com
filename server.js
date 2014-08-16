'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    mongoose = require('mongoose');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

 console.log('AQUI!:' + process.env.NODE_ENV);

// Initializing system variables
var config = require('./config/config');
var db     = mongoose.connect(config.db);

console.log('DEPOIS!:' + process.env.NODE_ENV);
//Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js|coffee)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

var app = express();

console.log(process.env.NODE_ENV);

//express settings
require('./config/express')(app, db);

//Bootstrap routes
require('./config/routes')(app);

//Start the app by listening on <port>
var port = config.port;
app.listen(port);
console.log('Express app started on port ' + port + ' on ' + process.env.NODE_ENV + ' environment.');

//expose app
exports = module.exports = app;