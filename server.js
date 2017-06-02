// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

var passport   = require('passport');
var session    = require('express-session');
var env = require('dotenv').load();
const expressHandlebars = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
// var models = require("./app/models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 


//Set templating engine
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Static directory
app.use(express.static("./public"));

// Routes =============================================================

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


//load passport strategies
require('./config/passport.js')(passport, db.user);
 
//Sync Database
// models.sequelize.sync().then(function() {
db.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
 
	}).catch(function(err) {
    	console.log(err, "Something went wrong with the Database Update!")
	}); 

app.listen(PORT, function(err) {
 
    if (!err)
        console.log("App listening on PORT " + PORT);
    else console.log(err)
 
});

