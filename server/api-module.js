"use strict";
var request = require('request');
var cheerio = require('cheerio');

function handleApiRequest(req, res, app) {
    switch (req.url) {
        case '/api/lastpost':
            fetchLastPost(req, res);
            break;
        case '/api/trout':
            allowCORS(res);
            res.send('http://cdns2.freepik.com/fotos-gratis/truta-salmonada_2434493.jpg');
            break;
        case '/api/trout/lastpost':
            allowCORS(res);
            fetchLastPostPinhol(req, res);
            break;
        default:
            break;
    }
}


function allowCORS(res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}

function fetchLastPost(req, res) {
    var url = 'http://blog.antoniocapelo.com';

    request(url, function(error, response, html) {
        if (error) {
            console.log('Error:', error);
        } else {
            var $ = cheerio.load(html);

            var json = {
                title: "",
                summary: "",
                image: "",
                url: ""
            };

            var post = $('.post')[0];
            json.title = $(post).find('.post-title a').first().text().trim();
            json.image = url + $(post).find('.coverpic').first().attr('src');
            json.url = url + $(post).find('.post-title a').first().attr('href');
            json.summary = $(post).find('.summary').first().text().trim();

            res.json(json);
        }
    })
}

function fetchLastPostPinhol(req, res) {
    var url = 'http://living.luispinho.me';

    request(url, function(error, response, html) {
        if (error) {
            console.log('Error:', error);
        } else {
            var $ = cheerio.load(html);

            var json = {
                title: "",
                summary: "",
                image: "",
                url: ""
            };

            var post = $('#index article');
            json.image = $('.home .image-wrap img').first().attr('src');
            json.url = post.find('a').attr('href');
            json.title = post.find('a').text();
            json.summary = post.find('p').text();

            res.json(json);
        }
    })
}


module.exports = {
    handleApiRequest: handleApiRequest
};
