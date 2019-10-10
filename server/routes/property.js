const router = require('express').Router();
const validator = require('../middlewares/validator');
const authenticate = require('../middlewares/authentication');
const propertyController = require('../controllers/property');

const url = '/api/v1';

// POST REQUESTS
router
  .route(`${url}/create-property`)
  .post(
    authenticate.checkTokenExists,
    authenticate.checkTokenValid,
    validator.checkBodyContains('property_type', 'num_apartment', 'num_bathroom', 'address', 'rentage_amount'),
    validator.checkBodyNotEmpty('property_type', 'num_apartment', 'num_bathroom', 'address', 'rentage_amount'),
    validator.checkBodyValidString('property_type'),
    validator.checkBodyValidInteger('rentage_amount'),
    propertyController.createProperty,
  );

module.exports = router;
