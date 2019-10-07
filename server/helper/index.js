const jwt = require('jsonwebtoken');

class Helper {
  /**
   * decode token, and return decoded
   * @param {object} req - api reques
   * @return {object}
   */
  static decodeToken(req) {
    const { token } = req.headers;

    if (token === undefined || token === null || token === '') {
      const err = new Error();
      err.message = 'token does not exist';
      err.statusCode = 401;
      throw err;
    }

    return jwt.verify(token, process.env.SECRET_KEY);
  }
}

module.exports = Helper;
