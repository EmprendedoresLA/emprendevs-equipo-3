// groups REST API
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
var group, group, agent, groupId, d;
d = 'http://'+config.app.domain+":"+config.app.port;

// Unit Tests
describe('REST API group '+d+"/api/v1/groups", function(){
    before(function(done){
        // Before all tests
        group = require("../../../models/group.js");
        // It show create a new document in the database
        group = new group({ name: 'group'+Math.floor((Math.random() * 10) + 1)});
        group.save(function(err, doc){
            groupId = doc._id;    
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

    describe('groups REST', function(){
        it('GET /api/v1/groups', function(done){
            agent
              .get(d+'/api/v1/groups')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.length>0);
                  done();
              });
        });
        it('GET /api/v1/groups/count', function(done){
            agent
              .get(d+'/api/v1/groups/count')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.count > 0);
                  done();
              });
        });
        it('POST /api/v1/groups', function(done){
            agent
              .post(d+'/api/v1/groups')
              .send({ name: 'Test Creation group' })
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.name === 'Test Creation group');
                  done();
              });
        });
        it('PUT /api/v1/groups/:groupId', function(done){
            agent
              .put(d+'/api/v1/groups/'+groupId)
              .send({ name: 'Test Change group' })
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.name === 'Test Change group');
                  done();
              });
        });
        it('DELETE /api/v1/groups/:groupId', function(done){
            agent
              .del(d+'/api/v1/groups/'+groupId)
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(JSON.stringify(res.body) === '{}');
                  done();
              });
        });
        it('DELETE /api/v1/groups', function(done){
            agent
              .del(d+'/api/v1/groups/')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(JSON.stringify(res.body) === '{}');
                  done();
              });
        });

    });
});
