var express = require('express');
var router = express.Router();

var Request = require('../models/Request.js');
var Site = require('../models/Site.js');

/* Test DB */
router.get('/', function(req, res) {
      Request.find(function(err,requests){
        res.render('request',{ requests: requests });
      });
});

router.get('/create', function(req, res) {
    Site.find(function(err,sites) {
    	res.render('create', { sites: sites });
    });
});

router.post('/create', function(req, res) {
	var newRequest = new Request({
		sitename: req.body.sitename,
		requestdescription: req.body.requestdescription
	});
    newRequest.save(function(err) {
    	if (err) res.send('error' + err);
    	else {
    		res.redirect('/request');
    	}
    });
});

module.exports = router;
