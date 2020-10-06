const assert = require('assert');
const jwt = require('jsonwebtoken');
describe('authByCredentials#Helper', () => {
  beforeEach(async () => {
    const user = await User.findOne({login: 'test'});
    if (!user) {
      await User.create({
        login: 'test',
        password: '123456',
      });
    }
  });
  afterEach(async () => {
    const user = await User.findOne({login: 'test'});
    if (user) {
      await User.destroy({
        login: 'test'
      });
    }
  });
  it('should auth user', async () => {
    const auth = await sails.helpers.authByCredentials.with({
      login: 'test',
      password: '123456'
    }).catch(err => assert(!err));
    assert(auth);
    assert(jwt.verify(auth, sails.config.custom.secret));
  });
  it('should get an error', async () => {
    const auth = await sails.helpers.authByCredentials.with({
      login: 'test',
      password: '654321'
    }).catch(err => assert(err));
    assert(!auth);
  });
});
