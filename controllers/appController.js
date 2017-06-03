var express = require("express");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
});

router.get("/about", function(req, res) {
    res.render("about")
});

router.get("/index", function(req, res) {
    res.redirect("/");
});

router.get("/profile", function(req, res) {
    res.render("profile");
});

router.get("/profilex", function(req, res) {
    res.render("profilex")
});

router.get("/quiz", function(req, res) {
    res.render("quiz");
});

router.get("*", function(req, res) {
    res.render("404")
});

// Export routes for server.js to use.
module.exports = router;
 