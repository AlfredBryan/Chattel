
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('property', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    property_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    num_apartment: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    num_bathroom: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    address: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    rentage_amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('property'),
};
