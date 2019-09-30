module.exports = (sequelize, DataTypes) => {
  const parcels = sequelize.define('parcels', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    recipient: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipient_phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fromAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sentOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },

  }, {
    timestamps: false,
  });
  // eslint-disable-next-line no-unused-vars
  parcels.associate = function model(models) {
    // associations can be defined here
    parcels.belongsTo(models.Users, { foreignKey: 'Users' });
  };
  return parcels;
};
