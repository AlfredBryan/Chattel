module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('parcels', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    recipient: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    recipient_phone_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    itemName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    weight: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    height: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    length: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fromAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    toAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sentOn: {
      type: Sequelize.DATE,
      allowNull: true,
    },

  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('parcels'),
};
