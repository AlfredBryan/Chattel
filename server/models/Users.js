module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['male', 'female']],
          msg: 'Invalid Gender',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid Email Address',
        },
      },
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      // isNum: {
      //  args: true,
      //  msg: 'Invalid Phone Number',
      // },
      },
    },
    package_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
      references: {
        model: 'packages',
        key: 'id',
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    timestamps: false,
    underscored: true,
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function model(models) {
    users.belongsTo(models.packages, { foreignKey: 'package_id', targetKey: 'id' });
  };
  return users;
};
