const assert = require('assert');
const supertest = require('supertest');
describe('LeafController#Controller', () => {
  it('should get all leafs', async () => {
    const connection = await sails.helpers.authByCredentials.with({login: 'test', password: '123456'});
    supertest(sails.hooks.http.app)
      .get('/leafs')
      .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
      .set('Authorization', connection.token)
      .expect(200)
      .end((err, res) => {
        assert(!err);
        assert(res);
        assert(res.body);
        assert(res.body[0]);
        assert(res.body[0].id);
        assert(res.body[0].label);
        assert(res.body[0].notes);
      });
  });
  it('should get a leaf', async () => {
    const connection = await sails.helpers.authByCredentials.with({login: 'test', password: '123456'});
    const leaf = await Leaf.findOne({label: 'Notes'});
    supertest(sails.hooks.http.app)
      .get('/leaf/' + leaf.id)
      .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
      .set('Authorization', connection.token)
      .expect(200)
      .end((err, res) => {
        assert(!err);
        assert(res);
        assert(res.body);
        assert(res.body.id);
        assert(res.body.label);
        assert(res.body.notes);
      });
  });
  it('should create a leaf', async () => {
    const connection = await sails.helpers.authByCredentials.with({login: 'test', password: '123456'});
    supertest(sails.hooks.http.app)
      .post('/leaf/create')
      .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
      .set('authorization', connection.token)
      .send({
        label: 'VsCode',
      })
      .expect(200)
      .end((err, res) => {
        assert(!err);
        assert(res);
        assert(res.body);
        assert(res.body.id);
        assert(res.body.label === 'VsCode');
      });
  });
  it('should update a leaf', async () => {
    const connection = await sails.helpers.authByCredentials.with({login: 'test', password: '123456'});
    const leaf = await Leaf.findOne({label: 'VsCode'});
    supertest(sails.hooks.http.app)
      .put('/leaf/update/' + leaf.id)
      .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
      .set('authorization', connection.token)
      .send({
        label: 'Visual Studio Code Extensions'
      })
      .expect(200)
      .end((err, res) => {
        assert(!err);
        assert(res);
        assert(res.body);
        assert(res.body.id);
        assert(res.body.label);
      });
  });
  it('should delete a leaf', async () => {
    const connection = await sails.helpers.authByCredentials.with({login: 'test', password: '123456'});
    const leaf = await Leaf.findOne({label: {contains: 'Code'}});
    supertest(sails.hooks.http.app)
      .delete('/leaf/delete/' + leaf.id)
      .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
      .set('authorization', connection.token)
      .expect(200)
      .end((err, res) => {
        assert(!err);
        assert(res);
      });
  });
});
