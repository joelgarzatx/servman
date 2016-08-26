var express = require('express');
var router = express.Router();

var Part = require('../models/Part.js');

/* Test DB */
router.get('/', function(req, res) {
      Part.find(function(err,parts){
        res.render('part',{ parts: parts });
      });
});

module.exports = router;
