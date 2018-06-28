'use strict';
module.exports = (sequelize, DataTypes) => {
  let Traits = sequelize.define('Traits', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER
  }, {});
  Traits.associate = function(models) {
    // associations can be defined here
  };
  return Traits;
};