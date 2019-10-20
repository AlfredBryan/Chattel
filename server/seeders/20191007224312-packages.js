/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('packages', [{
    type: 'basic',
    description: 'for test',
    features: ['test1', 'test2'],
    price: '50',
    num_property: 2,
    num_tenant: 10,
    num_advert: 2,
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('packages', null, {}),
};
