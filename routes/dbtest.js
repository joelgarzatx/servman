var express = require('express');
var router = express.Router();

var Test = require('../models/TestDB.js');

/* Test DB */
router.get('/', function(req, res, next) {
  var newTest = new Test({
    field: 'test entry',
  });
  newTest.save(function(err) {
    if (err) res.send('error ' + err);
    else {
      Test.find(function(err,docs){
        res.render('dbtest',{ tests: docs });
      });
    };
  });
});

module.exports = router;
