// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'John', email: 'ryan@ryanhunter.org', avatar: 'http://placekitten.com/300/300'},
    { name: 'Kaelan', email: 'ryan@ryanhunter.org', avatar: 'http://placekitten.com/400/400'},
    { name: 'Patrick', email: 'ryan@ryanhunter.org', avatar: 'http://placekitten.com/500/500'},
    { name: 'Ryan', email: 'ryan@ryanhunter.org', avatar: 'http://placekitten.com/700/700'}
  ];

  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.get('/services', function(req, res) {
  res.render('pages/services');
});

router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});