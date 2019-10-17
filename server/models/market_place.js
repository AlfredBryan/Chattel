module.exports = (sequelize, DataTypes) => {
  const tenants = sequelize.define('market_place', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    property_type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    num_rooms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    num_palour: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    num_bathroom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    images: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  // eslint-disable-next-line no-unused-vars
  tenants.associate = function models(model) {
    tenants.belongsTo(models.Users, { foreignKey: 'user_id'});
  };
  return tenants;
};
