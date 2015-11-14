// players REST API
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
var player, player, agent, playerId, d;
d = 'http://'+config.app.domain+":"+config.app.port;

// Unit Tests
describe('REST API player '+d+"/api/v1/players", function(){
    before(function(done){
        // Before all tests
        player = require("../../../models/player.js");
        // It show create a new document in the database
        player = new player({ name: 'player'+Math.floor((Math.random() * 10) + 1)});
        player.save(function(err, doc){
            playerId = doc._id;    
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

    describe('players REST', function(){
        it('GET /api/v1/players', function(done){
            agent
              .get(d+'/api/v1/players')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.length>0);
                  done();
              });
        });
        it('GET /api/v1/players/count', function(done){
            agent
              .get(d+'/api/v1/players/count')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.count > 0);
                  done();
              });
        });
        it('POST /api/v1/players', function(done){
            agent
              .post(d+'/api/v1/players')
              .send({ name: 'Test Creation player' })
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.name === 'Test Creation player');
                  done();
              });
        });
        it('PUT /api/v1/players/:playerId', function(done){
            agent
              .put(d+'/api/v1/players/'+playerId)
              .send({ name: 'Test Change player' })
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(res.body.name === 'Test Change player');
                  done();
              });
        });
        it('DELETE /api/v1/players/:playerId', function(done){
            agent
              .del(d+'/api/v1/players/'+playerId)
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(JSON.stringify(res.body) === '{}');
                  done();
              });
        });
        it('DELETE /api/v1/players', function(done){
            agent
              .del(d+'/api/v1/players/')
              .end(function(res) {
                  assert.ok(res.ok);
                  assert.ok(JSON.stringify(res.body) === '{}');
                  done();
              });
        });

    });
});
