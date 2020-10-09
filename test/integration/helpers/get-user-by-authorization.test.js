const assert = require('assert');
describe('getUserByAuthorization#Helper', () => {
  it('should get user', async () => {
    const auth = await sails.helpers.authByCredentials.with({
      login: 'test',
      password: '123456'
    });
    const user = await sails.helpers.getUserByAuthorization.with({
      token: auth.token
    });
    assert(user);
    assert(user.id);
    assert(user.login);
  });
});
