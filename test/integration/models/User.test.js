const assert = require('assert');
const bcrypt = require('bcryptjs');
describe('User#Model', () => {
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
  it('should update user', async () => {
    const user = await User.findOne({
      login: 'test'
    }).catch(err => assert(!err));
    const userUpdated = await User.updateOne({
      id: user.id
    }).set({
      password: bcrypt.hashSync('titi', 10)
    }).catch(err => assert(!err));
    assert(userUpdated.id);
    assert(userUpdated.login === 'test');
    assert(bcrypt.compareSync('titi', userUpdated.password));
    assert(userUpdated.createdAt);
    assert(userUpdated.updatedAt);
  });
});
