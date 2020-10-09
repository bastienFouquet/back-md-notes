const assert = require('assert');
describe('Notes#Model', () => {
  it('should create a note', async () => {
    const user = await User.findOne({login: 'test'});
    const leaf = await Leaf.findOne({label: 'Notes'});
    const note = await Notes.create({
      title: 'create',
      content: '> ^$ù*mé&"&é"yèé&"tv-é"&d"aze"_ryc"-"btètbr"c',
      leaf: leaf.id,
      user: user.id
    }).fetch().catch(err => assert(!err));
    assert(note);
    assert(note.id);
    assert(note.title);
    assert(note.content);
    assert(note.leaf);
  });
  it('should update a note', async () => {
    const noteUpdated = await Notes.updateOne({
      title: 'create',
    }).set({
      content: '> ^$ù*mé&"&é"yèé&"tv-é"&d"aze"_ryc"-"btètbr"c\n[tets](hzatydf)'
    }).catch(err => assert(!err));
    assert(noteUpdated);
    assert(noteUpdated.id);
    assert(noteUpdated.title);
    assert(noteUpdated.content);
    assert(noteUpdated.leaf);
  });
  it('should get populated note', async () => {
    const note = await Notes.findOne({title: 'notes'}).populateAll();
    assert(note);
    assert(note.title);
    assert(note.user);
    assert(note.user.login);
    assert(note.content !== undefined);
    assert(note.leaf);
    assert(note.leaf.id);
  });
  it('should delete a note', async () => {
    const isDelete = await Notes.destroyOne({
      title: 'notes'
    });
    assert(isDelete);
  });
});
