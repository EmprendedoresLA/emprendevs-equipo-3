// Players Test Cases
// -----------------------------

// Modules Dependencies:
//  - Assert (http://nodejs.org/api/assert.html)
var assert = require('assert');

// Require basic config files and DB connection
require('../../../utils/dbconnect');

// Global Variables for the test case
var Players, players;

// Unit Tests
describe('Model Test Players', function(){
    before(function(){
        // Before all tests
        Players = require("../../../models/players.js");
    });

   // describe('Players', function(){
        // It show create a new document in the database
     //   it('add a players', function(done){
       //     players = new Players({ name: 'players'+Math.floor((Math.random() * 10) + 1)});
         //   players.save(done);
        //});

    //});
});
