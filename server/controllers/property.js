/* eslint-disable camelcase */
const { decodeToken } = require('../helper/index');
const { Users } = require('../models');

class Property {
  /**
   * create property
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async createProperty(req, res, next) {
    const {
      property_type,
      num_apartment,
      num_bathroom,
      address,
      rentage_amount,
    } = req.body;
    const user_id = decodeToken(req).id;

    try {
      await Users.create({
        user_id,
        property_type,
        num_apartment,
        num_bathroom,
        address,
        rentage_amount,
      });
    } catch (error) {
      const err = new Error();
      err.message = 'error occured';
      err.details = error;
      err.statusCode = 500;
      return next(err);
    }

    return res.status(201).json({
      message: 'Property created successfully',
      statusCode: 201,
    });
  }
}

module.exports = Property;
