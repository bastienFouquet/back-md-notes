var sails = require('sails');
assert = require('assert');
request = require('supertest');
should = require('should');
/**
 * If create element test in DB, please check the model test because they have foreign key to fix
 */
createModelTest = false;

before(function (done) {
  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(30000);

  sails.lift({
    port: 7979
    // configuration for testing purposes
  }, (err) => {
    if (err) {
      return done(err);
    }
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after((done) => {
  // here you can clear fixtures, etc.
  setTimeout(() => {
    sails.lower(done);
  }, 500);
});
