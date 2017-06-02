var express = require("express");
var bodyParser = require("body-parser");
<<<<<<< HEAD
var methodOverride = require("method-override");
=======

var passport   = require('passport');
var session    = require('express-session');
var env = require('dotenv').load();
const expressHandlebars = require('express-handlebars');
>>>>>>> 6f64bbfdccbef38482fb0f0aede6555239e3dfff

var port = 3000;

<<<<<<< HEAD
var app = express();
=======
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 
>>>>>>> 6f64bbfdccbef38482fb0f0aede6555239e3dfff

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/"));

<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: false }));
=======
//Set templating engine
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Static directory
app.use(express.static("./public"));
>>>>>>> 6f64bbfdccbef38482fb0f0aede6555239e3dfff

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

<<<<<<< HEAD
// Set Handlebars.
var exphbs = require("express-handlebars");
=======
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
>>>>>>> 6f64bbfdccbef38482fb0f0aede6555239e3dfff

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/appController.js");

app.use("/", routes);

app.listen(port);
