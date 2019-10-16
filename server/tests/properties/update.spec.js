/* eslint-disable no-console */
/* eslint-disable no-undef */
const chai = require('chai');
// const { expect, done } = require('chai');
const chaiHttp = require('chai-http');
// const faker = require('faker');
const server = require('../../server');
const dummy = require('../../dummy');

const url = '/api/v1/update-property';

chai.use(chaiHttp);
chai.should();

let user1;
let user2;
let propertyId;

// eslint-disable-next-line prefer-arrow-callback
describe('update property that belongs to user', function test() {
  before(async () => {
    // create users
    await dummy.createUser('johnp@gmail.com', 'johnp', '0908765424');
    await dummy.createUser('james@gmail.com', 'jamesp', '0800767424');
    // get token and id of first user
    user1 = await dummy.loginUser('johnp@gmail.com', 'johnp');
    // get token and id of second user
    user2 = await dummy.loginUser('james@gmail.com', 'jamesp');

    // create property for first user
    await dummy.createPropertyHouse(user1.id);
    await dummy.createPropertyShop(user1.id);

    // create property for second user
    await dummy.createPropertyHouse(user2.id);
    await dummy.createPropertyShop(user2.id);
    // get property id
    // send user id along so property can be created automatically incase of failures
    propertyId = await dummy.getPropertyId(user1.token);
  });

  after(async () => {
    await dummy.destroyUsers();
    await dummy.destroyProperties();
  });

  it('check if users that are not authenticated can check property', (done) => {
    chai.request(server)
      .put(`${url}/${propertyId}`)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  it('check if user can update property with param that is not an integer', (done) => {
    chai.request(server)
      .put(`${url}/undefined`)
      .set('token', user2.token)
      .send({
        property_type: 'warehouse',
        num_apartment: 40,
        num_bathroom: 40,
        address: 'test update',
        rentage_amount: '600',
      })
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('check if user can update another user single property', (done) => {
    chai.request(server)
      .put(`${url}/${propertyId}`)
      .set('token', user2.token)
      .send({
        property_type: 'warehouse',
        num_apartment: 40,
        num_bathroom: 40,
        address: 'test update',
        rentage_amount: '600',
      })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('check if user can update property', (done) => {
    chai.request(server)
      .put(`${url}/${propertyId}`)
      .set('token', user1.token)
      .send({
        property_type: 'warehouse',
        num_apartment: 40,
        num_bathroom: 40,
        address: 'test update',
        rentage_amount: '600',
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
