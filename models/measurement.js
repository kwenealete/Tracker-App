'use strict';
module.exports = (sequelize, DataTypes) => {
  const Measurement = sequelize.define('Measurement', {
    weight: {
      allowNull: false,
      type: DataTypes.FLOAT}
  }, {});
  Measurement.associate = function(models) {
    // associations can be defined here
    Measurement.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Measurement;
};