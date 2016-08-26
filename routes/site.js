var express = require('express');
var router = express.Router();

var Site = require('../models/Site.js');

/* Test DB */
router.get('/', function(req, res) {
      Site.find(function(err,sites){
        res.render('site',{ sites: sites });
      });
});

module.exports = router;
