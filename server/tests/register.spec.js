/* eslint-disable object-property-newline */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const server = require('../server');
const dummy = require('../dummy');

const url = '/api/v1/register';

chai.use(chaiHttp);
chai.should();

// eslint-disable-next-line prefer-arrow-callback
describe('User Registration', function test() {
  this.timeout(0);
  before(async () => {
    await dummy.createUser('johnp@gmail.com', 'johnp', '0908765424');
  });

  after(async () => {
    await dummy.destroyUsers();
  });

  it('should check if registration is valid without firstname', (done) => {
    chai.request(server)
      .post(url)
      .send({
        lastname: '',
        username: '',
        email: '',
        gender: '',
        phone_number: '',
        package_type: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('first name is required');
        done();
      });
  });

  it('should check if registration is valid without lastname', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        email: '',
        gender: '',
        phone_number: '',
        package_type: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('last name is required');
        done();
      });
  });

  it('should check if registration is valid without email', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        lastname: '',
        gender: '',
        phone_number: '',
        package_type: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('email is required');
        done();
      });
  });

  it('should check if registration is valid without gender', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        package_type: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('gender is required');
        done();
      });
  });

  it('should check if registration is valid without phone number', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        package_type: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('phone_number is required');
        done();
      });
  });

  it('should check if registration is valid without package_type', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        phone_number: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('package_type is required');
        done();
      });
  });

  it('should check if registration is valid without password', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        phone_number: '',
        package_type: '',
        password2: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('password is required');
        done();
      });
  });


  it('should check if registration is valid if firstname is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        lastname: 'test',
        email: 'test',
        phone_number: '24567890',
        package_type: '1',
        gender: 'male',
        password: 'wertyhjkl',
        password2: 'wertyuio',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('first name cannot be empty');
        done();
      });
  });

  it('should check if registration is valid if lastname is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'fhgdjk',
        lastname: '',
        email: 'dgfchvjk',
        phone_number: '124567890',
        package_type: '1',
        gender: 'male',
        password: 'sfdghjkl',
        password2: 'etryuio',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('last name cannot be empty');
        done();
      });
  });

  it('should check if registration is valid if email is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'dfghjk',
        lastname: 'fhgjkujk',
        email: '',
        phone_number: '+244908465785',
        package_type: '1',
        gender: 'male',
        password: 'fghjkl',
        password2: 'dghft',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('email cannot be empty');
        done();
      });
  });

  it('should check if registration is valid if gender is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'dfghjk',
        lastname: 'rftghyjuk',
        email: 'gfhjklkjh',
        phone_number: '+244456789049',
        package_type: '1',
        gender: '',
        password: 'fghjk',
        password2: 'gfhjk',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('gender cannot be empty');
        done();
      });
  });

  it('should check if registration is valid if phone number is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'fdghjkl',
        lastname: 'dgfhjkl;',
        email: 'fhvgjkl;',
        package_type: '1',
        phone_number: '',
        gender: 'male',
        password: 'fhgjk',
        password2: 'gfhj',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('phone_number cannot be empty');
        done();
      });
  });

  it('should check if registration is valid if package_type is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'dgfthjkl',
        lastname: 'dfghjklhkj',
        email: 'fghjkl;j',
        phone_number: '+2449072182162',
        package_type: '',
        gender: 'male',
        password: 'fghjkl',
        password2: 'fdghjk',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('package_type cannot be empty');
        done();
      });
  });

  it('should check if registration is valid if password is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'fghjkl',
        lastname: 'fghjkl;',
        email: 'dgfhjkl;',
        gender: 'male',
        phone_number: '+244556778',
        package_type: '1',
        password: '',
        password2: 'fhgjkl',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('password cannot be empty');
        done();
      });
  });

  it('should check if registration is valid if firstname length is lesser than 3', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'je',
        lastname: 'sgfcjhfka',
        email: 'shdkffla',
        gender: 'male',
        phone_number: '+244556778',
        package_type: '1',
        password: 'jahged',
        password2: 'hkdvjd',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('minimum length for first name is 3');
        done();
      });
  });

  it('should check if registration is valid if lastname length is lesser than 3', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jeremiah',
        lastname: 'sa',
        username: 'sahjk',
        email: 'savghjk',
        gender: 'male',
        phone_number: '+244556778',
        package_type: '1',
        password: 'sagfhj',
        password2: 'gfhjk',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('minimum length for last name is 3');
        done();
      });
  });

  it('should check if registration is valid if gender length is lesser than 4', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jeremiah',
        lastname: 'samuel',
        email: 'sammyjay@yahoo.com',
        gender: 'mal',
        phone_number: '+244556778',
        package_type: '1',
        password: 'sahj',
        password2: 'gjfdhk',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('minimum length for gender is 4');
        done();
      });
  });

  it('should check if registration is valid if password length is lesser than 3', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        gender: 'male',
        phone_number: '+244556778',
        package_type: '1',
        password: 'fhh',
        password2: 'fhh',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('minimum length for password is 6');
        done();
      });
  });

  it('check if registration is valid if gender is an invalid one', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        gender: 'fmale',
        phone_number: '+244556778',
        package_type: '1',
        password: 'jmnxjfc',
        password2: 'jhdkdd',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('invalid gender');
        done();
      });
  });

  it('check if registration is valid if email is invalid', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        email: 'hdjff',
        gender: 'male',
        phone_number: '+244556778',
        package_type: '1',
        password: 'hdcjkh',
        password2: 'gjdhfd',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('invalid email address');
        done();
      });
  });

  it('check if registration is valid if passwords do not match', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        gender: 'male',
        phone_number: '+244556778',
        package_type: '1',
        password: faker.internet.password(),
        password2: faker.internet.password(),
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('passwords do not match');
        done();
      });
  });

  it('check if registration is valid if email already exists', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        email: 'johnp@gmail.com',
        gender: 'male',
        phone_number: '+244556778',
        package_type: '1',
        password: 'test009',
        password2: 'test009',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('email already exists');
        done();
      });
  });

  it('check if registration is valid if phone number already exists', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        email: 'test@gmail.com',
        gender: 'male',
        phone_number: '0908765424',
        package_type: '1',
        password: 'test009',
        password2: 'test009',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('phone number already exists');
        done();
      });
  });

  it('check if registration works', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        email: 'test567@gmail.com',
        gender: 'male',
        phone_number: '+244556778',
        package_type: '1',
        password: 'test009',
        password2: 'test009',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.message.should.be.equal('user account created successfully');
        done();
      });
  });
});
