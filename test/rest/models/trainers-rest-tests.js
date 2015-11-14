// trainers REST API
// -----------------------------

// Modules Dependencies:
//  - Assert (http://nodejs.org/api/assert.html)
//  - SuperAgent (http://visionmedia.github.io/superagent/)
var assert = require('assert'),
    config = require('../../../config'),
    superagent = require('superagent');

// Require basic config files and DB connection
require('../../../utils/dbconnect');

// Global Variables for the test case
var trainer, trainer, agent, trainerId, d;
d = 'http://'+config.app.domain+":"+config.app.port;

// Unit Tests
describe('REST API trainer '+d+"/api/v1/trainers", function(){
    before(function(done){
        // Before all tests
        trainer = require("../../../models/trainer.js");
        // It show create a new document in the database
        trainer = new trainer({ name: 'trainer'+Math.floor((Math.random() * 10) + 1)});
        trainer.save(function(err, doc){
            trainerId = doc._id;    
        });
        // Get domain
        d = config.app.domain+":"+config.app.port;
        // Start agent
        agent = superagent.agent();
        // Login if necesary
        agent
          .post(d+'/admin')
          .send({ email: "admin@anyandgo.com", password: "123456" })
          .end(function(res) {
              assert.ok(res.ok);
              done();
          });
    });

    describe('trainers REST', function(){
        it('GET /api/v1/trainers', function(done){
            agent
              .get(d+'/api/v1/trainers')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.length>0);
                  done();
              });
        });
        it('GET /api/v1/trainers/count', function(done){
            agent
              .get(d+'/api/v1/trainers/count')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.count > 0);
                  done();
              });
        });
        it('POST /api/v1/trainers', function(done){
            agent
              .post(d+'/api/v1/trainers')
              .send({ name: 'Test Creation trainer' })
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.name === 'Test Creation trainer');
                  done();
              });
        });
        it('PUT /api/v1/trainers/:trainerId', function(done){
            agent
              .put(d+'/api/v1/trainers/'+trainerId)
              .send({ name: 'Test Change trainer' })
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.name === 'Test Change trainer');
                  done();
              });
        });
        it('DELETE /api/v1/trainers/:trainerId', function(done){
            agent
              .del(d+'/api/v1/trainers/'+trainerId)
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(JSON.stringify(res.body) === '{}');
                  done();
              });
        });
        it('DELETE /api/v1/trainers', function(done){
            agent
              .del(d+'/api/v1/trainers/')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(JSON.stringify(res.body) === '{}');
                  done();
              });
        });

    });
});
