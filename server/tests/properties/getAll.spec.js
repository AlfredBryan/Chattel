/* eslint-disable no-console */
/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';
const chai = require('chai');
// const { expect, done } = require('chai');
const chaiHttp = require('chai-http');
// const faker = require('faker');
const bcrypt = require('bcryptjs');
const server = require('../../server');
const { Users, property } = require('../../models');

const url = '/api/v1/properties';
const hash = bcrypt.hashSync;

chai.use(chaiHttp);
chai.should();

let token1;
let token2;
let userId1;
let userId2;
const createUser = () => Users.create({
  // eslint-disable-next-line object-property-newline
  email: 'john004@gmail.com', password: hash('johnp', 10), firstname: 'John', lastname: 'Doe',
  // eslint-disable-next-line object-property-newline
  phone_number: '08009856578', package_type: '1', gender: 'male', isAdmin: false,
});

const createUser2 = () => Users.create({
  // eslint-disable-next-line object-property-newline
  email: 'james004@gmail.com', password: hash('jamesp', 10), firstname: 'James', lastname: 'Jade',
  // eslint-disable-next-line object-property-newline
  phone_number: '070098509876', package_type: '1', gender: 'male', isAdmin: false,
});

const createProperty = (id) => {
  property.create({
    user_id: id, property_type: 'house', num_apartment: 4, num_bathroom: 4, address: 'test', rentage_amount: '60',
  });
  property.create({
    user_id: id, property_type: 'house', num_apartment: 4, num_bathroom: 4, address: 'test', rentage_amount: '60',
  });
};


// eslint-disable-next-line no-unused-vars
const loginUser = () => new Promise((resolve, reject) => {
  chai.request(server)
    .post('/api/v1/login')
    .send({
      email: 'john004@gmail.com',
      password: 'johnp',
    })
    .end((err, res) => {
      userId1 = res.body.result.id;
      createProperty(res.body.result.id);
      resolve(res.body.token);
    });
});

// eslint-disable-next-line no-unused-vars
const loginUser2 = () => new Promise((resolve, reject) => {
  chai.request(server)
    .post('/api/v1/login')
    .send({
      email: 'james004@gmail.com',
      password: 'jamesp',
    })
    .end((err, res) => {
      userId2 = res.body.result.id;
      // console.log(res.body);
      createProperty(res.body.result.id);
      resolve(res.body.token);
    });
});

describe('get properties that belongs to user', () => {

  before(async () => {
    await createUser2();
    await createUser();
    token1 = await loginUser();
    token2 = await loginUser2();
  });

  after(async () => {
    await Users.destroy({
      where: {},
      truncate: true,
    });

    await property.destroy({
      where: {},
      truncate: true,
    });

  });

  it('check if users that are not authenticated can check properties', (done) => {
    chai.request(server)
      .get(url)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  it('check if users only get properties that  belongs to them', (done) => {
    chai.request(server)
      .get(url)
      .set('token', token1)
      .end((err, res) => {
        res.should.have.status(200);
        const properties = res.body.result;
        properties.forEach(elem => {
          elem.user_id.should.be.equal(userId1);
        })
        done();
      });
  });

});