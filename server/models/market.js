module.exports = (sequelize, DataTypes) => {
  const market = sequelize.define('market_place', {
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
        model: 'users',
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
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  // eslint-disable-next-line no-unused-vars
  market.associate = function model(models) {
    market.belongsTo(models.users, { foreignKey: 'user_id' });
  };
  return market;
};
