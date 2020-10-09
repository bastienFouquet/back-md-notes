const assert = require('assert');
const supertest = require('supertest');
describe('UserController#Controller', () => {
  describe('#auth', () => {
    it('try to connect', async () => {
      supertest(sails.hooks.http.app)
        .post('/user/auth')
        .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
        .send({
          login: 'test',
          password: '123456'
        })
        .expect(200)
        .end((err, res) => {
          assert(!err);
          assert(res);
          assert(res.body.token);
          assert(res.body.user);
          assert(res.body.user.id);
          assert(res.body.user.login);
        });
    });
  });
  describe('#create', () => {
    it('try to create user', async () => {
      supertest(sails.hooks.http.app)
        .post('/user/create')
        .set('x-api-key', 'O1ZDcX>S{"QLyA;"RoEgK[7vJpYREm:M~!/iY8q9,Q-.tFwqru\'^:Q`7r@H,-Kg')
        .send({
          login: 'userTest',
          password: 'passTest'
        })
        .expect(200)
        .end(async (err, res) => {
          assert(!err);
          assert(res);
          assert(res.body);
          assert(res.body.id);
          assert(res.body.login);
        });
    });
  });
});
