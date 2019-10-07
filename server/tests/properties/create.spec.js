/* eslint-disable no-console */
/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';
const chai = require('chai');
// const { expect, done } = require('chai');
const chaiHttp = require('chai-http');
// const faker = require('faker');
const bcrypt = require('bcryptjs');
const server = require('../../server');
const { Users } = require('../../models');

const url = '/api/v1/create-property';
const hash = bcrypt.hashSync;

chai.use(chaiHttp);
chai.should();

let token;
const createUser = () => Users.create({
  // eslint-disable-next-line object-property-newline
  email: 'john004@gmail.com', password: hash('johnp', 10), firstname: 'John', lastname: 'Doe',
  // eslint-disable-next-line object-property-newline
  phone_number: '08009856578', package_type: '1', gender: 'male', isAdmin: false,
});

// eslint-disable-next-line no-unused-vars
const loginUser = () => new Promise((resolve, reject) => {
  chai.request(server)
    .post('/api/v1/login')
    .send({
      email: 'john004@gmail.com',
      password: 'johnp',
    })
    .end((err, res) => {
      resolve(res.body.token);
    });
});

describe('Authenticate User', () => {
  before(async () => {
    await createUser();
    token = await loginUser();
  });

  after(async () => {
    await Users.destroy({
      where: {},
      truncate: true,
    });
  });

  it('Check if user can add property if property type is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        property_type: '',
        num_apartment: 4,
        num_bathroom: 4,
        address: 'test ',
        rentage_amount: '$40',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('property_type cannot be empty');
        done();
      });
  });

  it('check if users can add property if number of apartment is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        property_type: 'house',
        num_apartment: '',
        num_bathroom: 4,
        address: 'test',
        rentage_amount: '$50',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('num_apartment cannot be empty');
        done();
      });
  });

  it('check if users can add property if number of bathroom is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        property_type: 'house',
        num_apartment: 4,
        num_bathroom: '',
        address: 'test',
        rentage_amount: '$60',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('num_bathroom cannot be empty');
        done();
      });
  });

  it('check if users can add property if address is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        property_type: 'house',
        num_apartment: 4,
        num_bathroom: 4,
        address: '',
        rentage_amount: '$70',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('address cannot be empty');
        done();
      });
  });

  it('check if users can add property if rentage amount is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        property_type: 'house',
        num_apartment: 4,
        num_bathroom: 4,
        address: 'test',
        rentage_amount: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('rentage_amount cannot be empty');
        done();
      });
  });

});
