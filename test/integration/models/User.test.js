const assert = require('assert');
const bcrypt = require('bcryptjs');
describe('User#Model', () => {
  it('should check attributes', async () => {
    const user = await User.findOne({
      login: 'test'
    }).catch(err => assert(!err));
    assert(user.id);
    assert(user.login === 'test');
    assert(bcrypt.compareSync('123456', user.password));
    assert(user.createdAt);
    assert(user.updatedAt);
  });
  it('should create user', async () => {
    const user = await User.create({
      login: 'foo',
      password: 'bar'
    }).fetch().catch(err => assert(!err));
    assert(user);
    assert(user.id);
    assert(user.login);
  });
  it('should update user', async () => {
    const user = await User.findOne({
      login: 'foo'
    }).catch(err => assert(!err));
    const userUpdated = await User.updateOne({
      id: user.id
    }).set({
      password: bcrypt.hashSync('titi', 10)
    }).catch(err => assert(!err));
    assert(userUpdated.id);
    assert(userUpdated.login === 'foo');
    assert(bcrypt.compareSync('titi', userUpdated.password));
    assert(userUpdated.createdAt);
    assert(userUpdated.updatedAt);
  });
});
