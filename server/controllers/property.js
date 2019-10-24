/* eslint-disable camelcase */
const { decodeToken } = require('../helper/index');
const { users, property, packages } = require('../models');

class PropertyController {
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
      // get package user subscribed for.
      const userPackage = await users.findOne({
        where: {
          id: user_id,
        },
        include: [{
          model: packages,
          attributes: ['num_property'],
        }],
        attributes: ['package_id'],
      });
      // I'm unable to access package.num_property directly thats why i strigified and parsed
      const temp = JSON.stringify(userPackage);
      const packageLimit = JSON.parse(temp).package.num_property;


      // get amount of property user already has registered
      const propertyCount = await property.count({
        where: {
          user_id,
        },
      });

      // check if limit for subscribed package has been reached
      if (propertyCount >= packageLimit) {
        const err = new Error();
        err.message = 'you have reached the limit for your current subscription';
        err.statusCode = 400;
        return next(err);
      }

      await property.create({
        user_id,
        property_type,
        num_apartment,
        num_bathroom,
        address,
        rentage_amount,
      });

      return res.status(201).json({
        message: 'Property created successfully',
        statusCode: 201,
      });
    } catch (error) {
      const err = new Error();
      err.message = 'error occured';
      err.details = error;
      err.statusCode = 500;
      return next(err);
    }
  }

  /**
   * Get all properties user has registered
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async getProperties(req, res, next) {
    const user_id = decodeToken(req).id;
    try {
      // TODO: include count of tenants each property has
      const properties = await property.findAll({
        where: {
          user_id,
        },
      });

      return res.status(200).json({
        message: 'Available properties',
        result: properties,
        statusCode: 200,
      });
    } catch (error) {
      const err = new Error();
      err.message = 'error occured';
      err.details = error;
      err.statusCode = 500;
      return next(err);
    }
  }

  /**
   * Get single property user has registered
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async getSingleProperty(req, res, next) {
    const user_id = decodeToken(req).id;
    const { propertyId } = req.params;
    try {
      // TODO: include count of tenant property has
      const singleProperty = await property.findOne({
        where: {
          id: propertyId,
          user_id,
        },
      });

      if (!singleProperty) {
        const err = new Error();
        err.message = 'property not found';
        err.statusCode = 404;
        return next(err);
      }

      return res.status(200).json({
        message: 'property',
        result: singleProperty,
        statusCode: 200,
      });
    } catch (error) {
      const err = new Error();
      err.message = 'error occured';
      err.details = error;
      err.statusCode = 500;
      return next(err);
    }
  }

  /**
   * update single property user has registered
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async updateProperty(req, res, next) {
    const {
      property_type,
      num_apartment,
      num_bathroom,
      address,
      rentage_amount,
    } = req.body;
    const { propertyId } = req.params;
    const user_id = decodeToken(req).id;

    try {
      // check if property exists and also check if it belongs to the user trying to update it
      const findProperty = await property.findOne({
        where: {
          id: propertyId,
          user_id,
        },
      });

      if (!findProperty) {
        const err = new Error();
        err.message = 'property not found';
        err.statusCode = 404;
        return next(err);
      }

      // update property
      await findProperty.update({
        property_type,
        num_apartment,
        num_bathroom,
        address,
        rentage_amount,
      });

      return res.status(200).json({
        message: 'Property Updated',
        statusCode: 200,
      });
    } catch (error) {
      const err = new Error();
      err.message = 'error occured';
      err.details = error;
      err.statusCode = 500;
      return next(err);
    }
  }

  /**
   * delete single property user has registered
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async deleteProperty(req, res, next) {
    const { propertyId } = req.params;
    const user_id = decodeToken(req).id;

    try {
      // check if property exists and also if it belongs to the user trying to delete it
      const findProperty = await property.findOne({
        where: {
          id: propertyId,
          user_id,
        },
      });

      if (!findProperty) {
        const err = new Error();
        err.message = 'property not found';
        err.statusCode = 404;
        return next(err);
      }

      // delete property
      findProperty.destroy();

      return res.status(204).json({
        message: 'Property Deleted',
        statusCode: 204,
      });
    } catch (error) {
      const err = new Error();
      err.message = 'error occured';
      err.details = error;
      err.statusCode = 500;
      return next(err);
    }
  }
}

module.exports = PropertyController;
