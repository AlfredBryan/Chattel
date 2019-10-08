
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('packages', [{
    name: 'basic',
    description: 'for test',
    features: ['test1', 'test2'],
    price: '50',
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('packages', null, {}),
};
