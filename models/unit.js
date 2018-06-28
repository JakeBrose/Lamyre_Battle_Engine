'use strict';
module.exports = (sequelize, DataTypes) => {
  let Units = sequelize.define('Units', {
    name: DataTypes.STRING,
    Mov: DataTypes.INTEGER,
    Wnd: DataTypes.INTEGER,
    V: DataTypes.INTEGER,
    FV: DataTypes.INTEGER,
    MWS: DataTypes.INTEGER,
    PWS: DataTypes.INTEGER,
    Arm: DataTypes.INTEGER,
    Cost: DataTypes.INTEGER
  }, {});
  Units.associate = function(models) {
    // associations can be defined here
  };
  return Units;
};