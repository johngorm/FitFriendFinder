module.exports = function(sequelize, DataTypes) {
  var userLogin = sequelize.define("userLogin", {
  // 	id: {
		// type: DataTypes.UUID,
  //     	primaryKey: true,
  //     	defaultValue: DataTypes.UUIDV4
  //     },
	username: DataTypes.INTEGER,
	password: DataTypes.STRING
  });
  return userLogin;
};
