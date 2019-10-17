/* eslint-disable camelcase */
const { decodeToken } = require('../helper/index');
const { Users, property, packages, tenants } = require('../models');

class tenantController {
  /**
   * create tenant
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async createTenant(req, res, next) {
    const {
      fullname,
      email,
      phone_number,
      address,
      last_payment_date,
      payment_expiry_date,
      num_years_paid_for,
    } = req.body;
    const user_id = decodeToken(req).id;
    const { propertyId } = req.params;

    try {

      // check if property actually exists, and if it belongs to the user
      const checkProperty = await property.findOne({
        where: {
          user_id,
          id: propertyId,
        },
      });

      // if property doesnt exist return 404 error
      if (!checkProperty) {
        const err = new Error();
        err.message = 'property does not exist';
        err.statusCode = 404;
        return next(err);
      }

      // get package user subscribed for.
      const userPackage = await Users.findOne({
        where: {
          id: user_id,
        },
        // TODO: get number of tenant the package allows properties to have
        include: [{
          model: packages,
          attributes: ['num_property'],
        }],
        attributes: ['package_type'],
      });
      // TODO: get packageLimit from userPackage
      const packageLimit = 10;


      // get amount of property user already has registered
      const tenantCount = await tenants.count({
        where: {
          property_id: propertyId,
        },
      });

      // check if package limit is yet to be exceeded
      if (tenantCount >= packageLimit) {
        const err = new Error();
        err.message = 'you have reached the limit for your current subscription';
        err.statusCode = 400;
        return next(err);
      }

      await tenants.create({
        fullname,
        email,
        phone_number,
        address,
        rentage_amount,
        last_payment_date,
        payment_expiry_date,
        num_years_paid_for,
      });

      return res.status(201).json({
        message: 'Tenant created successfully',
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
   * Get all tenants a user has registered under a property
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async getTenants(req, res, next) {
    const user_id = decodeToken(req).id;
    const { propertyId } = req.params;
    try {

      // check if property actually exists, and if it belongs to the user
      const checkProperty = await property.findOne({
        where: {
          user_id,
          id: propertyId,
        },
      });

      // if property doesnt exist return 404 error
      if (!checkProperty) {
        const err = new Error();
        err.message = 'property does not exist';
        err.statusCode = 404;
        return next(err);
      }

      const allTenant = await tenants.findAll({
        where: {
          property_id: propertyId,
        },
      });

      return res.status(200).json({
        message: 'Available tenants',
        result: allTenant,
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
}

module.exports = tenantController;
