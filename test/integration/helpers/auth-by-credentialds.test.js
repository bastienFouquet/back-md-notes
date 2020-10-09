const assert = require('assert');
const jwt = require('jsonwebtoken');
describe('authByCredentials#Helper', () => {
  it('should auth user', async () => {
    const auth = await sails.helpers.authByCredentials.with({
      login: 'test',
      password: '123456'
    }).catch(err => assert(!err));
    assert(auth);
    assert(jwt.verify(auth.token, sails.config.custom.secret));
  });
  it('should get an error', async () => {
    const auth = await sails.helpers.authByCredentials.with({
      login: 'test',
      password: '654321'
    });
    assert(!auth);
  });
});
