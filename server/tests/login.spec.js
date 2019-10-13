/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const server = require('../server');
const dummy = require('../dummy');

const url = '/api/v1/login';

chai.use(chaiHttp);
chai.should();

// eslint-disable-next-line prefer-arrow-callback
describe('User Login', function test() {
  this.timeout(0);
  before(async () => {
    // create user
    await dummy.createUser('johnp1@gmail.com', 'johnp', '090876546824');
  });

  after(async () => {
    // clear table
    await dummy.destroyUsers();
  });

  it('should check if login is valid if email is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        email: '',
        password: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('email cannot be empty');
        done();
      });
  });

  it('should check if login is valid if password is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        email: faker.internet.email(),
        password: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('password cannot be empty');
        done();
      });
  });


  it('should check if login is valid if email is invalid', (done) => {
    chai.request(server)
      .post(url)
      .send({
        email: 'lovinjerry004',
        password: 'test',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('invalid email address');
        done();
      });
  });

  it('should check if login works', (done) => {
    chai.request(server)
      .post(url)
      .send({
        email: 'johnp1@gmail.com',
        password: 'johnp',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.be.equal('logged in');
        done();
      });
  });
});
