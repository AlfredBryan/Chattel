const { users } = require('../models/');

class validator {
  /**
   * checks if request body contains required keys
   * @param {...String} params - required parameters
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @returns {undefined}
   */
  static checkBodyContains(...params) {
    return (req, _res, next) => {
      /* eslint-disable no-restricted-syntax */
      for (const p of params) {
        // removes white space from param string, to make string a valid request body key
        // so param string can be displayed as an error message if needed
        // e.g 'first name' ==> firstname
        // req.body[firstname]
        // e.g Error 'first name is required'
        const temp = p.replace(' ', '');

        if (req.body[temp] === undefined) {
          const err = new Error();
          err.message = `${p} is required`;
          err.statusCode = 400;
          return next(err);
        }
      }

      return next();
    };
  }

  /**
   * checks if request body keys are not empty
   * @param {...string} params - required fields
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware
   * @returns {undefined}
   */
  static checkBodyNotEmpty(...params) {
    return (req, _res, next) => {
      /* eslint-disable no-restricted-syntax */
      for (const p of params) {
        // removes white space from param string, to make string a valid request body key
        // so param string can be displayed as an error message if needed
        // e.g 'first name' ==> firstname
        // req.body[firstname]
        // e.g Error 'first name is cannot be empty'
        const temp = p.replace(' ', '');

        if (req.body[temp] === '') {
          const err = new Error();
          err.message = `${p} cannot be empty`;
          err.statusCode = 400;
          return next(err);
        }
      }

      return next();
    };
  }

  /**
   * checks if request body keys are valid strings
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @returns {undefined}
   */
  static checkBodyValidString(...params) {
    return (req, _res, next) => {
      /* eslint-disable no-restricted-syntax */
      for (const p of params) {
        // removes white space from param string, to make string a valid request body key
        // so param string can be displayed as an error message if needed
        // e.g 'first name' ==> firstname
        // req.body[firstname]
        // e.g Error 'first name is cannot be empty'
        const temp = p.replace(' ', '');
        const regex = /\d/;
        if (regex.test(req.body[temp]) === true) {
          const err = new Error();
          err.message = `${p} is not a vaild string`;
          err.statusCode = 400;
          return next(err);
        }
      }

      return next();
    };
  }

  /**
   *checks if request body keys are valid integers
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @returns {undefined}
   */
  static checkBodyValidInteger(...params) {
    return (req, _res, next) => {
      /* eslint-disable no-restricted-syntax */
      for (const p of params) {
        // removes white space from param string, to make string a valid request body key
        // so param string can be displayed as an error message if needed
        // e.g 'first name' ==> firstname
        // req.body[firstname]
        // e.g Error 'first name is cannot be empty'
        const temp = p.replace(' ', '');
        const regex = /\D/;
        if (regex.test(req.body[temp]) === true) {
          const err = new Error();
          err.message = `${p} is not a vaild integer`;
          err.statusCode = 400;
          return next(err);
        }
      }

      return next();
    };
  }

  /**
   * checks if request body keys length, are not lesser than minimum
   * @param {...String} - required paramaters
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @returns {undefined}
   */
  static checkBodyMinValue(min, ...params) {
    return (req, _res, next) => {
      /* eslint-disable no-restricted-syntax */
      for (const p of params) {
        // removes white space from param string, to make string a valid request body key
        // so param string can be displayed as an error message if needed
        // e.g 'first name' ==> firstname
        // req.body[firstname]
        // e.g Error 'first name is cannot be empty'
        const temp = p.replace(' ', '');
        if (req.body[temp].length < min) {
          const err = new Error();
          err.message = `minimum length for ${p} is ${min}`;
          err.statusCode = 400;
          return next(err);
        }
      }

      return next();
    };
  }

  /**
   * checks if request body keys length are not greater than maximum
   * @param {...String} params - required parameters
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @returns {undefined}
   */
  static checkBodyMaxValue(max, ...params) {
    return (req, _res, next) => {
      /* eslint-disable no-restricted-syntax */
      for (const p of params) {
        // removes white space from param string, to make string a valid request body key
        // so param string can be displayed as an error message if needed
        // e.g 'first name' ==> firstname
        // req.body[firstname]
        // e.g Error 'first name is cannot be empty'
        const temp = p.replace(' ', '');
        if (req.body[temp].length > max) {
          const err = new Error();
          err.message = `maximum value for  ${p} is ${max}`;
          err.statusCode = 400;
          return next(err);
        }
      }

      return next();
    };
  }

  /**
   * checks if passwords match
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @returns {undefined}
   */
  static checkPasswordsMatch(req, _res, next) {
    const { password, password2 } = req.body;

    if (password !== password2) {
      const err = new Error();
      err.message = 'passwords do not match';
      err.statusCode = 400;
      return next(err);
    }

    return next();
  }

  /**
   * check gender valid
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {object} next - next middleware function
   * @returns {undefined}
   */
  static checkGenderValid(req, res, next) {
    const { gender } = req.body;

    if (gender.toLowerCase() !== 'male' && gender.toLowerCase() !== 'female') {
      const err = new Error();
      err.message = 'invalid gender';
      err.statusCode = 400;
      return next(err);
    }

    return next();
  }

  /**
   * checks if email is a valid one
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @returns {json}
   */
  static checkEmailValid(req, res, next) {
    const { email } = req.body;
    const regex = /\w+@\w+\.\w{3}/;

    if (regex.test(email) !== true) {
      const err = new Error();
      err.statusCode = 400;
      err.message = 'invalid email address';
      return next(err);
    }

    return next();
  }

  /**
   * checks if email exists
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   */
  static async checkEmailExists(req, res, next) {
    const { email } = req.body;
    try{ 
    const result = await users.findOne({
      where: {
        email,
      },
      attributes: {
        exclude: ['packageId'],
      },
    });

    if (result) {
      const err = new Error();
      err.message = 'email already exists';
      err.statusCode = 400;
      return next(err);
    }
  } catch(error) {
    const err = new Error();
    err.message = 'internal server erro';
    err.details = error;
    return next(err);
  }

    return next();
  }

  /**
   * checks if phone number exists
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   */
  static async checkNumberExists(req, res, next) {
    // eslint-disable-next-line camelcase
    const { phone_number } = req.body;
    const result = await users.findOne({
      where: {
        phone_number,
      },
    });

    if (result) {
      const err = new Error();
      err.message = 'phone number already exists';
      err.statusCode = 400;
      return next(err);
    }

    return next();
  }

  /**
   *checks if request parameteres are valid integers
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @returns {undefined}
   */
  static checkParamValidInteger(...params) {
    return (req, _res, next) => {
      /* eslint-disable no-restricted-syntax */
      for (const p of params) {
        // removes white space from param string, to make string a valid request param key
        // so param string can be displayed as an error message if needed
        // e.g 'first name' ==> firstname
        // req.body[firstname]
        // e.g Error 'first name is cannot be empty'
        const temp = p.replace(' ', '');
        const regex = /\D/;
        if (regex.test(req.params[temp]) === true) {
          const err = new Error();
          err.message = `parameter ${p} is not a vaild integer`;
          err.statusCode = 400;
          return next(err);
        }
      }

      return next();
    };
  }
}
module.exports = validator;
