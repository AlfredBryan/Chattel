
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('packages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    features: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    num_property: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    num_tenant: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    num_advert: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('packages'),
};
