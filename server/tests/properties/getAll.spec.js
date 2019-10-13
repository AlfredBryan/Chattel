/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const dummy = require('../../dummy');

const url = '/api/v1/properties';

chai.use(chaiHttp);
chai.should();

let token1;
let token2;
let userId1;
let userId2;

// eslint-disable-next-line prefer-arrow-callback
describe('get properties that belongs to user', function test() {
  this.timeout(0);
  before(async () => {
    // create users
    await dummy.createUser('johnp@gmail.com', 'johnp', '0908765424');
    await dummy.createUser('james@gmail.com', 'jamesp', '0800767424');
    // get token and id of first user
    const temp1 = await dummy.loginUser('johnp@gmail.com', 'johnp');
    // get token and id of second user
    const temp2 = await dummy.loginUser('james@gmail.com', 'jamesp');
    // create property for first user
    await dummy.createPropertyHouse(temp1.id);
    await dummy.createPropertyShop(temp1.id);

    // create property for second user
    await dummy.createPropertyHouse(temp2.id);
    await dummy.createPropertyShop(temp2.id);
    token1 = temp1.token;
    token2 = temp2.token;
    userId1 = temp1.id;
  });

  after(async () => {
    await dummy.destroyUsers();
    await dummy.destroyProperties();
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
        properties.forEach((elem) => {
          elem.user_id.should.be.equal(userId1);
        });
        done();
      });
  });
});
