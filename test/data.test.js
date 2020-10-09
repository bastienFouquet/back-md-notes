it('create all data', async () => {
  const user = await User.create({
    login: 'test',
    password: '123456'
  }).fetch();
  const sailsLeaf = await Leaf.create({
    label: 'Sails',
    user: user.id
  }).fetch();
  await Notes.create({
    title: 'sails',
    content: '# Sails.js Doc',
    leaf: sailsLeaf.id,
    user: user.id
  }).fetch();
  const notesLeaf = await Leaf.create({
    label: 'Notes',
    user: user.id
  }).fetch();
  await Notes.create({
    title: 'notes',
    content: '# md-notes Doc',
    leaf: notesLeaf.id,
    user: user.id
  }).fetch();
});
