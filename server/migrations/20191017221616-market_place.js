// TODO: REFACTOR
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('market_place', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    property_type: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    location: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: false,
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    num_rooms: {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false,
    },
    num_palour: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: false,
    },
    num_bathroom: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: false,
    },
    images: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      allowNull: false,
    },
  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, _Sequelize) => queryInterface.dropTable('market_place'),
};
