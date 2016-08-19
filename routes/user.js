var express = require('express');
var router = express.Router();

var requiresLogin = require('../requiresLogin');

router.get('/',
  requiresLogin,
  function (req, res, next) {
    res.render('user', {
      user: req.user
    });
  });

module.exports = router;
