// require our dependencies
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var webPort		   = 5000;
// var PORT           = process.env.PORT || webPort;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// route our app
var router = require('./app/routes');
app.use('/', router);


// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(PORT, function() {
  console.log("App started and available on port " + webPort + " at http://localhost:"+ webPort +"/");
});

