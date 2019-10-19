module.exports = (sequelize, DataTypes) => {
  const tenants = sequelize.define('tenants', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: 'property',
        key: 'id',
      },
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    last_payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    payment_expiry_date: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    num_years_paid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  // eslint-disable-next-line no-unused-vars
  tenants.associate = function models(model) {
    tenants.belongsTo(model.property, { foreignKey: 'property_id' });
  };
  return tenants;
};
