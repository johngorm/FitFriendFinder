
var path = require('path');

module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(path.join(process.cwd() + '/views/home.html'));
	});

	app.get('/signup', function(req,res){
		res.sendFile(path.join(process.cwd() + '/views/signup.html'));
	});
}