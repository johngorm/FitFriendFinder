module.exports = function(sequelize, DataTypes) {
  var userProfile = sequelize.define("userProfile", {
  	id: {
		type: DataTypes.UUID,
      	primaryKey: true,
      	defaultValue: DataTypes.UUIDV4
      },
	age: DataTypes.INTEGER,
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return userProfile;
};
