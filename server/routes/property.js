const router = require('express').Router();
const validator = require('../middlewares/validator');
const authenticate = require('../middlewares/authentication');
const propertyController = require('../controllers/property');

const url = '/api/v1';

// REGISTER PROPERTY
router
  .route(`${url}/create-property`)
  .post(
    authenticate.checkTokenExists,
    authenticate.checkTokenValid,
    validator.checkBodyContains('property_type', 'num_apartment', 'num_bathroom', 'address', 'rentage_amount'),
    validator.checkBodyNotEmpty('property_type', 'num_apartment', 'num_bathroom', 'address', 'rentage_amount'),
    validator.checkBodyValidString('property_type'),
    validator.checkBodyValidInteger('rentage_amount'),
    validator.checkBodyValidInteger('num_apartment'),
    validator.checkBodyValidInteger('num_bathroom'),
    propertyController.createProperty,
  );

// GET ALL REGISTERED PROPERTY A USER HAS
router
  .route(`${url}/properties`)
  .get(
    authenticate.checkTokenExists,
    authenticate.checkTokenValid,
    propertyController.getProperties,
  );

// GET SINGLE REGISTERED PROPERTY A USER HAS
router
  .route(`${url}/property/:propertyId`)
  .get(
    authenticate.checkTokenExists,
    authenticate.checkTokenValid,
    validator.checkParamValidInteger('propertyId'),
    propertyController.getSingleProperty,
  );

// UPDATE PROPERTY
router
  .route(`${url}/update-property/:propertyId`)
  .put(
    authenticate.checkTokenExists,
    authenticate.checkTokenValid,
    validator.checkParamValidInteger('propertyId'),
    validator.checkBodyContains('property_type', 'num_apartment', 'num_bathroom', 'address', 'rentage_amount'),
    validator.checkBodyNotEmpty('property_type', 'num_apartment', 'num_bathroom', 'address', 'rentage_amount'),
    validator.checkBodyValidString('property_type'),
    validator.checkBodyValidInteger('rentage_amount'),
    validator.checkBodyValidInteger('num_apartment'),
    validator.checkBodyValidInteger('num_bathroom'),
    propertyController.updateProperty,
  );

// DELETE PROPERTY
router
  .route(`${url}/delete-property/:propertyId`)
  .delete(
    authenticate.checkTokenExists,
    authenticate.checkTokenValid,
    validator.checkParamValidInteger('propertyId'),
    propertyController.deleteProperty,
  );

module.exports = router;
