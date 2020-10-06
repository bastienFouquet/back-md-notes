const assert = require('assert');
const bcrypt = require('bcryptjs');
describe('hashPassword#Helper', () => {
  it('should hash password', async () => {
    const password = '123456';
    const hashedPassword = await sails.helpers.hashPassword.with({
      password: password
    }).catch(err => assert(!err));
    assert(password !== hashedPassword);
    assert(bcrypt.compareSync(password, hashedPassword));
  });
});
