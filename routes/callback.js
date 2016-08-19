var express = require('express');
var router = express.Router();
var passport = require('passport');

// Auth0 callback handler
router.get('/',
  passport.authenticate('auth0', { failureRedirect: '/index' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect('/user');
  });

module.exports = router;
