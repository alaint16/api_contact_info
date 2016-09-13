// Base setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var contacts = require('./models/contact');
var ContactRoutes = require('./routes/contacts')
// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to the data base
mongoose.connect('mongodb://admin:admin@ds019766.mlab.com:19766/contact_api'); // connect to our database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
    console.log('Connected to a database')
});

var port = process.env.Port || 5454; //set our port

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/contact', ContactRoutes);

// START THE SERVER
// =============================================================================
app.listen(port); // lauch the server
console.log('Magic happens on port ' + port);

// BASE SETUP
// =============================================================================
