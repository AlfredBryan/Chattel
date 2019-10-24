module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    package_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false,
      references: {
        model: 'packages',
        key: 'id',
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, _Sequelize) => queryInterface.dropTable('users'),
};
