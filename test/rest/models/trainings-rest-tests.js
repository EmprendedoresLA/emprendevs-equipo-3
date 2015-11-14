// trainings REST API
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
var training, training, agent, trainingId, d;
d = 'http://'+config.app.domain+":"+config.app.port;

// Unit Tests
describe('REST API training '+d+"/api/v1/trainings", function(){
    before(function(done){
        // Before all tests
        training = require("../../../models/training.js");
        // It show create a new document in the database
        training = new training({ name: 'training'+Math.floor((Math.random() * 10) + 1)});
        training.save(function(err, doc){
            trainingId = doc._id;    
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

    describe('trainings REST', function(){
        it('GET /api/v1/trainings', function(done){
            agent
              .get(d+'/api/v1/trainings')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.length>0);
                  done();
              });
        });
        it('GET /api/v1/trainings/count', function(done){
            agent
              .get(d+'/api/v1/trainings/count')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.count > 0);
                  done();
              });
        });
        it('POST /api/v1/trainings', function(done){
            agent
              .post(d+'/api/v1/trainings')
              .send({ name: 'Test Creation training' })
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.name === 'Test Creation training');
                  done();
              });
        });
        it('PUT /api/v1/trainings/:trainingId', function(done){
            agent
              .put(d+'/api/v1/trainings/'+trainingId)
              .send({ name: 'Test Change training' })
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.name === 'Test Change training');
                  done();
              });
        });
        it('DELETE /api/v1/trainings/:trainingId', function(done){
            agent
              .del(d+'/api/v1/trainings/'+trainingId)
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(JSON.stringify(res.body) === '{}');
                  done();
              });
        });
        it('DELETE /api/v1/trainings', function(done){
            agent
              .del(d+'/api/v1/trainings/')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(JSON.stringify(res.body) === '{}');
                  done();
              });
        });

    });
});
