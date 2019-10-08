module.exports = (sequelize, DataTypes) => {
  const property = sequelize.define('property', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    property_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    num_apartment: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_bathroom: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rentage_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  });
  property.associate = function models(models) {
    // associations can be defined here
  };
  return property;
};
