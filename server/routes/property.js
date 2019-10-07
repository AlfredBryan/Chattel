const router = require('express').Router();
const validator = require('../middlewares/validator');
// eslint-disable-next-line no-unused-vars
const authenticate = require('../middlewares/authentication');
// const propertyController = require('../controllers/property');

const url = '/api/v1';

// POST REQUESTS

router
  .route(`${url}/create-property`)
  .post(
    validator.checkBodyContains('property_type', 'num_apartment', 'num_bathroom', 'address', 'rentage_amount'),
    validator.checkBodyNotEmpty('property_type', 'num_apartment', 'num_bathroom', 'address', 'rentage_amount'),
    validator.checkBodyValidString('property_type'),
  );

module.exports = router;
