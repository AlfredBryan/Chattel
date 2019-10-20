/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// dummy data tests needs to run should all be defined here
const bcrypt = require('bcryptjs');
// eslint-disable-next-line import/no-extraneous-dependencies
const chai = require('chai');
const { Users, property } = require('../models');
const server = require('../server');

const hash = bcrypt.hashSync;
class dummy {
  /**
   * create first user
   */
  static createUser(email, password, phone_number) {
    return Users.create({
      // eslint-disable-next-line object-property-newline
      email, password: hash(password, 10), firstname: 'John', lastname: 'Doe',
      // eslint-disable-next-line object-property-newline
      phone_number, package_id: '1', gender: 'male', isAdmin: false,
    });
  }

  /**
   * create property with property_type house, for registered user
   */
  static createPropertyHouse(user_id) {
    return property.create({
      user_id, property_type: 'house', num_apartment: 4, num_bathroom: 4, address: 'test', rentage_amount: '60',
    });
  }

  /**
  * create property with property_type shop, for registered user
  */
  static createPropertyShop(user_id) {
    return property.create({
      user_id, property_type: 'shop', num_apartment: 4, num_bathroom: 4, address: 'test', rentage_amount: '60',
    });
  }

  /**
   * log user in
   */
  static loginUser(email, password) {
    return new Promise((resolve, reject) => {
      chai.request(server)
        .post('/api/v1/login')
        .send({
          email,
          password,
        })
        .end((err, res) => resolve({
          token: res.body.token,
          id: res.body.result.id,
        }));
    });
  }

  /**
   * get id for property
   */
  static getPropertyId(token) {
    return new Promise((resolve, reject) => {
      chai.request(server)
        .get('/api/v1/properties')
        .set('token', token)
        .end((err, res) => {
          if (res.body.statusCode === 200) resolve(res.body.result[0].id);

          else reject();
        });
    });
  }

  /**
   * clear user table
   */
  static destroyUsers() {
    return Users.destroy({
      where: {},
      cascade: true,
    });
  }

  /**
   * clear property table
   */
  static destroyProperties() {
    return property.destroy({
      where: {},
      cascade: true,
    });
  }
}

module.exports = dummy;
