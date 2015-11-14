// teams Test Cases
// -----------------------------

// Modules Dependencies:
//  - Assert (http://nodejs.org/api/assert.html)
var assert = require('assert');

// Require basic config files and DB connection
require('../../../utils/dbconnect');

// Global Variables for the test case
var teams, teams;

// Unit Tests
describe('Model Test teams', function(){
    before(function(){
        // Before all tests
        teams = require("../../../models/teams.js");
    });

    describe('teams', function(){
        // It show create a new document in the database
        it('add a teams', function(done){
            teams = new teams({ name: 'teams'+Math.floor((Math.random() * 10) + 1)});
            teams.save(done);
        });

    });
});
