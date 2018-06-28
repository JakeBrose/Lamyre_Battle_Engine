'use strict';
module.exports = (sequelize, DataTypes) => {
  let Weapons = sequelize.define('Weapons', {
    name: DataTypes.STRING,
    SV: DataTypes.INTEGER,
    PV: DataTypes.INTEGER,
    Dmg: DataTypes.INTEGER,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER
  }, {timestamps: false, tableName: weapons});
  Weapons.associate = function(models) {
    // associations can be defined here
  };
  return Weapons;
};