module.exports = function(sequelize, DataTypes) {
  var userProfile = sequelize.define("userProfile", {
  // 	id: {
		// type: DataTypes.UUID,
  //     	primaryKey: true,
  //     	defaultValue: DataTypes.UUIDV4
  //     },
	age: DataTypes.INTEGER,
	height: DataTypes.INTEGER,
	weight: DataTypes.INTEGER,
	// BMI: DataTypes.INTEGER,
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
