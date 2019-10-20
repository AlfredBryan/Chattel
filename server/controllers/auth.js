const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Users, packages } = require('../models');

class Auth {
  /**
   * create user account
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async createAccount(req, res, next) {
    const {
      firstname,
      lastname,
      email,
      gender,
      // eslint-disable-next-line camelcase
      phone_number,
      // eslint-disable-next-line camelcase
      package_id,
    } = req.body;
    let { password } = req.body;
    let isAdmin = false;
    password = bcrypt.hashSync(password, 10);

    try {
      // if no user exist in database, make first user to register admin
      const checkAdmin = await Users.findOne({
        where: {},
        attributes: ['id'],
      });

      if (!checkAdmin) isAdmin = true;


      await Users.create({
        firstname,
        lastname,
        email,
        isAdmin,
        gender,
        phone_number,
        package_id,
        password,
      });
    } catch (error) {
      const err = new Error();
      err.message = 'error occured';
      err.details = error;
      return next(err);
    }

    return res.status(201).json({
      message: 'user account created successfully',
      statusCode: 201,
    });
  }

  /**
   * Log user in
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async loginUser(req, res, next) {
    const { email, password } = req.body;
    const result = await Users.findOne({
      where: {
        email,
      },
      include: [{
        model: packages,
        as: 'package',
        attributes: ['type'],
      }],
    });

    if (!result) {
      const err = new Error();
      err.message = 'invalid email or password';
      err.statusCode = 401;
      return next(err);
    }

    const compare = await bcrypt.compare(password, result.password);

    if (!compare) {
      const err = new Error();
      err.message = 'invalid email or password';
      err.statusCode = 401;
      return next(err);
    }

    // sign user token
    const token = jwt.sign({
      id: result.id,
      isAdmin: result.isAdmin,
    },
    process.env.SECRET_KEY, { expiresIn: '30d' });

    // unset user password
    result.password = undefined;

    return res.status(200).json({
      message: 'logged in',
      statusCode: 200,
      token,
      result,
    });
  }
}

module.exports = Auth;
