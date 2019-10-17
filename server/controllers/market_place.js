/* eslint-disable camelcase */
const { decodeToken } = require('../helper/index');
const { Users, packages, market } = require('../models');

class MarketController {
  /**
   * create advert
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async createMarket(req, res, next) {
    const {
      property_type,
      location,
      price,
      num_rooms,
      num_palour,
      num_bathroom,
      images
    } = req.body;
    const user_id = decodeToken(req).id;

    try {
      // get package user subscribed for.
      const userPackage = await Users.findOne({
        where: {
          id: user_id,
        },
        include: [{
          model: packages,
          attributes: ['num_property'],
        }],
        attributes: ['package_type'],
      });
      // TODO: get package limit for market
      // I'm unable to access package.num_property directly thats why i strigified and parsed
      const temp = JSON.stringify(userPackage);
      const marketLimit = JSON.parse(temp).package.num_property;


      // get amount of property user already has registered
      const marketCount = await market.count({
        where: {
          user_id,
        },
      });

      // check if limit for subscribed package has been reached
      if (marketCount >= marketLimit) {
        const err = new Error();
        err.message = 'you have reached the limit for your current subscription';
        err.statusCode = 400;
        return next(err);
      }

      await market.create({
        property_type,
        location,
        price,
        num_rooms,
        num_palour,
        num_bathroom,
        images
      });

      return res.status(201).json({
        message: 'Advert created successfully',
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
   * Get all adverts user has registered
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async getUserAdvert(req, res, next) {
    const user_id = decodeToken(req).id;
    try {
      const adverts = await market.findAll({
        where: {
          user_id,
        },
      });

      return res.status(200).json({
        message: 'Available adverts',
        result: adverts,
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
   * update single advert user has registered
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async updateAdvert(req, res, next) {
    const {
      property_type,
      location,
      price,
      num_rooms,
      num_palour,
      num_bathroom,
      images
    } = req.body;
    const { advertId } = req.params;
    const user_id = decodeToken(req).id;

    try {
      // get advert
      const findAdvert = await market.findOne({
        where: {
          id: advertId,
          user_id,
        },
      });

      if (!findAdvert) {
        const err = new Error();
        err.message = 'advert not found';
        err.statusCode = 404;
        return next(err);
      }

      // update advert
      await findAdvert.update({
        property_type,
        location,
        price,
        num_rooms,
        num_palour,
        num_bathroom,
        images
      });

      return res.status(200).json({
        message: 'Advert Updated',
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
   * delete single advert user has registered
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async deleteAdvert(req, res, next) {
    const { advertId } = req.params;
    const user_id = decodeToken(req).id;

    try {
      // check if property exists and also if it belongs to the user trying to delete it
      const findAdvert = await market.findOne({
        where: {
          id: advertId,
          user_id,
        },
      });

      if (!findAdvert) {
        const err = new Error();
        err.message = 'property not found';
        err.statusCode = 404;
        return next(err);
      }

      // delete advert
      findAdvert.destroy();

      return res.status(204).json({
        message: 'Advert Deleted',
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

   /**
   * Get all adverts for vistors
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async getAdverts(req, res, next) {
    try {
      const adverts = await market.findAll({});

      return res.status(200).json({
        message: 'Available adverts',
        result: adverts,
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

module.exports = PropertyController;
