const assert = require('assert');
describe('Leaf#Model', () => {
  it('should create a leaf', async () => {
    const user = await User.findOne({login: 'test'});
    const leaf = await Leaf.create({
      label: 'Angular',
      user: user.id
    }).fetch()
      .catch(err => assert(!err));
    assert(leaf);
    assert(leaf.id);
    assert(leaf.user);
  });
  it('should update a leaf', async () => {
    const leafUpdated = await Leaf.updateOne({
      label: 'Angular',
    }).set({
      label: 'Angular 2'
    }).catch(err => assert(!err));
    assert(leafUpdated);
    assert(leafUpdated.id);
    assert(leafUpdated.label === 'Angular 2');
  });
  it('should get populated leaf', async () => {
    const leafs = await Leaf.find().populateAll();
    assert(leafs);
    const leaf = leafs[0];
    assert(leaf.id);
    assert(leaf.label);
    assert(leaf.icon !== undefined);
    assert(leaf.parentLeaf !== undefined);
    assert(leaf.user);
    assert(leaf.notes !== undefined);
  });
  it('should get all leaf', async () => {
    const leafs = await Leaf.find().populateAll().catch(err => assert(!err));
    assert(leafs);
    const leaf = leafs[0];
    assert(leaf);
    assert(leaf.label);
    assert(leaf.user);
    assert(leaf.user.login);
    assert(leaf.parentLeaf !== undefined);
    assert(leaf.icon !== undefined);
  });
});
