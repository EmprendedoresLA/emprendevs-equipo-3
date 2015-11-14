// Groups Test Cases
// -----------------------------

// Modules Dependencies:
//  - Assert (http://nodejs.org/api/assert.html)
var assert = require('assert');

// Require basic config files and DB connection
require('../../../utils/dbconnect');

// Global Variables for the test case
var Groups, groups;

// Unit Tests
describe('Model Test Groups', function(){
    before(function(){
        // Before all tests
        Groups = require("../../../models/groups.js");
    });

    describe('Groups', function(){
        // It show create a new document in the database
        it('add a groups', function(done){
            groups = new Groups({ name: 'groups'+Math.floor((Math.random() * 10) + 1)});
            groups.save(done);
        });

    });
});
