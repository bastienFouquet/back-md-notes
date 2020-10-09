it('create all data', async () => {
  const user = await User.create({
    login: 'test',
    password: '123456'
  }).fetch();
  const leaf = await Leaf.create({
    label: 'Sails',
    user: user.id
  }).fetch();
  await Notes.create({
    title: 'sails',
    content: '# Sails.js Doc',
    leaf: leaf.id,
    user: leaf.user
  }).fetch();
});
