const assert = require('assert');
const supertest = require('supertest');
describe('NotesController#Controller', () => {
  it('should get all notes', async () => {
    const connection = await sails.helpers.authByCredentials.with({login: 'test', password: '123456'});
    supertest(sails.hooks.http.app)
      .get('/notes')
      .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
      .set('Authorization', connection.token)
      .expect(200)
      .end((err, res) => {
        assert(!err);
        assert(res);
        assert(res.body);
        assert(res.body[0]);
        assert(res.body[0].id);
        assert(res.body[0].title);
        assert(res.body[0].content);
      });
  });
  it('should get a note', async () => {
    const connection = await sails.helpers.authByCredentials.with({login: 'test', password: '123456'});
    const note = await Notes.findOne({title: 'notes'});
    supertest(sails.hooks.http.app)
      .get('/note/' + note.id)
      .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
      .set('Authorization', connection.token)
      .expect(200)
      .end((err, res) => {
        assert(!err);
        assert(res);
        assert(res.body);
        assert(res.body.id);
        assert(res.body.title);
        assert(res.body.content);
      });
  });
  it('should create a note', async () => {
    const connection = await sails.helpers.authByCredentials.with({login: 'test', password: '123456'});
    const leaf = await Leaf.findOne({label: 'Notes'});
    supertest(sails.hooks.http.app)
      .post('/note/create')
      .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
      .set('authorization', connection.token)
      .send({
        title: 'waterline',
        content: '### Waterline',
        leaf: leaf.id,
      })
      .expect(200)
      .end((err, res) => {
        assert(!err);
        assert(res);
        assert(res.body);
        assert(res.body.id);
        assert(res.body.title === 'waterline');
        assert(res.body.content === '### Waterline');
        assert(res.body.leaf === leaf.id);
      });
  });
  it('should update a note', async () => {
    const connection = await sails.helpers.authByCredentials.with({login: 'test', password: '123456'});
    const note = await Notes.findOne({title: 'waterline'});
    supertest(sails.hooks.http.app)
      .put('/note/update/' + note.id)
      .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
      .set('authorization', connection.token)
      .send({
        content: '### Waterline\n' +
          '---',
      })
      .expect(200)
      .end((err, res) => {
        assert(!err);
        assert(res);
        assert(res.body);
        assert(res.body.id);
        assert(res.body.title);
        assert(res.body.content === '### Waterline\n' +
          '---',);
        assert(res.body.leaf);
      });
  });
  it('should delete a note', async () => {
    const connection = await sails.helpers.authByCredentials.with({login: 'test', password: '123456'});
    const note = await Notes.findOne({title: 'waterline'});
    supertest(sails.hooks.http.app)
      .delete('/note/delete/' + note.id)
      .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
      .set('authorization', connection.token)
      .expect(200)
      .end((err, res) => {
        assert(!err);
        assert(res);
      });
  });
});
