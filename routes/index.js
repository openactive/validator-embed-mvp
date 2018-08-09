var express = require('express');
var request = require('request');
var cryptoRandomString = require('crypto-random-string');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var url = req.query.url;
  request(url, function (error, response, body) {
    var escapedBody = body.replace(/\n/g,'\\n');
    res.type('application/javascript'); 
    res.render('index', { json: escapedBody, unique: cryptoRandomString(10), url: url });
  });

});

module.exports = router;
