module.exports = (sequelize, DataTypes) => {
  const packages = sequelize.define('packages', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    features: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_property: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_advert: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_tenant: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  packages.associate = function model(models) {
    // associations can be defined here
    packages.hasMany(models.User, { onDelete: 'cascade', hooks: true });
  };
  return packages;
};
