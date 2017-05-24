
const db = require('../models');
const _ = require('lodash');

/* Routes */

module.exports = function(app) {

	function getLoggedInUser(ID){
		return db.userProfile.findOne({
			where:{
				id: ID
			}
		});
	}

	function getOtherUsers(ID){
		return db.userProfile.findAll({
			where:{
				id: {
					$ne: ID
				}
			}
		});
	}

	function deleteUserProfile(ID){
		return db.userProfile.destroy({
			where:{
				id: ID
			}
		});
	}

	function deleteUserLogIn(ID){
		return db.userLogin.destroy({
			where:{
				id: ID
			}
		});
	}


	//GET route for getting all the users	
	app.get('/api/user', function(req, res){
		db.userProfile.findAll({}).then(function(appUsers){
			res.json(appUsers);
		}).catch( (error) =>{
			console.error(error);
		});;
	});

	//GET route for a user's profile page
	app.get('/profile/:id', function(req,res){
		let ID = req.params.id;
		let promisesArray = [getLoggedInUser(ID), getOtherUsers(ID)];
		Promise.all(promisesArray).then( (users) => {
			
			var User = users[0]; //JSON object of current users info
			var matches = users[1];
			let userScore = User.profileScore;
		
			
			let inRangeMatches = []; 
			console.log('bar',matches.length);
			for(var ii = 0 ; ii < matches.length ; ii++){

				let potentialMatch = matches[ii].dataValues;
				matches[ii].compatibility = Math.abs(userScore - matches[ii]['profileScore']);

				if( matches[ii].compatibility < 10){
					potentialMatch.compatLevel = 'match-best';
				}
				else if (matches[ii].compatibility  < 15){
					potentialMatch.compatLevel = 'match-highly-likely';
				}
				else if (matches[ii].compatibility < 20){
					potentialMatch.compatLevel = 'match-more-likely';
				}
				else if (matches[ii].compatibility < 25){
					potentialMatch.compatLevel = 'match-likely';
				}
				else {
					potentialMatch.compatLevel = 'match-possible';
				}	
				
			}
			
			let matchpageInfo =  {User, matches};
			res.json(matchpageInfo);

		}).catch((error) => {
			db.userProfile.findAll({}).then((results) => {
				res.json(results);
			})
		});
	});

		//PUT route for updating a user's information
	app.put('/profile/:id', function(req,res){
		let updateinfo = req.body;
		db.userProfile.update({
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
		}).catch( (error) =>{
			console.error(error);
		});
	})


	//POST route for adding a new user to the database
	app.post('/signup', function(req,res){
		let new_user_info = req.body;
		db.userProfile.create({
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
			
		}).catch( (error) =>{
			console.error(error);
		});
	});


	//Delete route for a users profile
	app.delete('/profile/:id', function(req,res){
		let ID = req.params.id;
		let promisesArray = [destroyUserProfile(ID), destroyUserProfile(ID)];
		Promise.all(promisesArray).then(function(userProfiles) {
			res.redirect('/')//Set timer to display goodbye modal to user
		}).catch( (error) =>{
			console.error(error);
		});
	});
}