
const db = require('../models');

/* Routes */

module.exports = function(app) {


	//GET route for getting all the users	
	app.get('/api/user', function(req, res){
		db.userprofile.findAll({}).then(function(appUsers){
			res.json(appUsers);
		});
	});

	//GET route for a user's profile page
	app.get('/profile/:id', function(req,res){
		db.userprofile.findOne({
			where:{
				id : req.params.id
			}
		}).then(function(profile){
			res.render('userInfo', profile);
		})
	});

		//PUT route for updating a user's information
	app.put('/profile/:id', function(req,res){
		let updateinfo = req.body;
		db.userprofile.update({
			age: updateinfo.age,
			height: updateinfo.height,
			weight: updateinfo.weight,
			location: updateinfo.location,
			activity: updateinfo.activity,
		 	frequency: updateinfo.frequency,
			intensity: updateinfo.intensity,
			preception: updateinfo.perception,
			goal: updateinfo.goal,
			membership: updateinfo.membership

		}).then(function(profiles){
			res.json(profiles);
		})
	})


	//POST route for adding a new user to the database
	app.post('/signup', function(req,res){
		let new_user_info = req.body;
		db.userprofile.create({
			age: new_user_info.age,
			height: new_user_info.height,
			weight: new_user_info.weight,
			location: new_user_info.location,
			activity: new_user_info.activity,
		 	frequency: new_user_info.frequency,
			intensity: new_user_info.intensity,
			preception: new_user_info.perception,
			goal: new_user_info.goal,
			membership: new_user_info.membership

		}).then(function(newUser){
			res.json(newUser);
			
		});
	});


	//Delete route for a users profile
	app.delete('/profile/:id', function(req,res){
		db.userprofile.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(userprofiles) {
			//Need to delete user from login database
			res.redirect('/');
		})
	})
}