module.exports = function(sequelize, DataTypes) {
  var userProfile = sequelize.define("userProfile", {
	age: DataTypes.INTEGER,
	height: DataTypes.INTEGER,
	weight: DataTypes.INTEGER,
	location: DataTypes.STRING,
	activity: DataTypes.STRING,
	frequency: DataTypes.INTEGER,
	intensity: DataTypes.INTEGER,
	perception: DataTypes.STRING,
	goal: DataTypes.STRING,
    membership: DataTypes.STRING,
    profileScore: DataTypes.INTEGER
  });
  return userProfile;
};
