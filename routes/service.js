var express = require('express');
var router = express.Router();

var Service = require('../models/Service.js');

/* Test DB */
router.get('/', function(req, res) {
      Service.find(function(err,services){
        res.render('service',{ services: services });
      });
});

module.exports = router;
