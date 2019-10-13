/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');

const url = '/api/v1/create-property';
const server = require('../../server');
const dummy = require('../../dummy');

chai.use(chaiHttp);
chai.should();

let token;

// eslint-disable-next-line prefer-arrow-callback
describe('create property', function test() {
  this.timeout(0);
  before(async () => {
    // create users
    await dummy.createUser('johnp@gmail.com', 'johnp', '0908765424');
    // get token and id of first user
    const temp = await dummy.loginUser('johnp@gmail.com', 'johnp');
    token = temp.token;
  });

  after(async () => {
    await dummy.destroyUsers();
  });

  it('Check if user can add property if property type is empty', (done) => {
    chai.request(server)
      .post(url)
      .set('token', token)
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
      .set('token', token)
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
      .set('token', token)
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
      .set('token', token)
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
      .set('token', token)
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

  it('check if users can add property if property type is not a valid string', (done) => {
    chai.request(server)
      .post(url)
      .set('token', token)
      .send({
        property_type: 'house%&7',
        num_apartment: 4,
        num_bathroom: 4,
        address: 'test',
        rentage_amount: '60',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('property_type is not a vaild string');
        done();
      });
  });

  it('check if users can add property if number of apartment is not a valid integer', (done) => {
    chai.request(server)
      .post(url)
      .set('token', token)
      .send({
        property_type: 'house',
        num_apartment: '4test',
        num_bathroom: 4,
        address: 'test',
        rentage_amount: '60',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('num_apartment is not a vaild integer');
        done();
      });
  });

  it('check if users can add property if number of bathroom is not a valid integer', (done) => {
    chai.request(server)
      .post(url)
      .set('token', token)
      .send({
        property_type: 'house',
        num_apartment: 4,
        num_bathroom: '4test',
        address: 'test',
        rentage_amount: '60',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('num_bathroom is not a vaild integer');
        done();
      });
  });

  it('check if users can add property if rentage amount is not a valid integer', (done) => {
    chai.request(server)
      .post(url)
      .set('token', token)
      .send({
        property_type: 'house',
        num_apartment: 4,
        num_bathroom: 4,
        address: 'test',
        rentage_amount: '60fchg',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('rentage_amount is not a vaild integer');
        done();
      });
  });

  it('check if users can successfully add property', (done) => {
    chai.request(server)
      .post(url)
      .set('token', token)
      .send({
        property_type: 'house',
        num_apartment: 4,
        num_bathroom: 4,
        address: 'test',
        rentage_amount: '60',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.message.should.be.equal('Property created successfully');
        done();
      });
  });
});
