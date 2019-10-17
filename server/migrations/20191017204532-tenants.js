module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tenants', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    property_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: 'property',
        key: 'id',
      },
    },
    fullname: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    },
    last_payment_date: {
      type: Sequelize.DATE,
      allowNull: false,
      unique: false,
    },
    payment_expiry_date: {
      type: Sequelize.DATE,
      allowNull: false,
      unique: false,
    },
    num_years_paid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, _Sequelize) => queryInterface.dropTable('tenants'),
};
