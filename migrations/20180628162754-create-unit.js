'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Units', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      Mov: {
        type: Sequelize.INTEGER
      },
      Wnd: {
        type: Sequelize.INTEGER
      },
      V: {
        type: Sequelize.INTEGER
      },
      FV: {
        type: Sequelize.INTEGER
      },
      MWS: {
        type: Sequelize.INTEGER
      },
      PWS: {
        type: Sequelize.INTEGER
      },
      Arm: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Units');
  }
};