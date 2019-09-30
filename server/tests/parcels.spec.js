/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const chai = require('chai');
// const { expect, done } = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const server = require('../server');
const { parcels } = require('../models');

const url = '/api/v1/parcels';

chai.use(chaiHttp);
chai.should();

const createUser = () => {
  Users.create({
    email: 'john@gmail.com', password: hash('johnp', 10), firstname: 'John', lastname: 'Doe', gender: 'male', isAdmin: false,
  });
};

const createParcel = () => {
  parcels.create({
    user: '', recipient: '', recipient_phone_number: '', itemName: '', status: '', weight: '', height: '', length: '', fromAddress: '', toAddress: '', sentOn: '',
  });
};

describe('Add parcels to database', () => {
  before((done) => {
    createUser();
    createParcel();
    done();
  });

  after((done) => {
    done();
  });
});
