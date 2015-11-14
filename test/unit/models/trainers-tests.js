// Trainers Test Cases
// -----------------------------

// Modules Dependencies:
//  - Assert (http://nodejs.org/api/assert.html)
var assert = require('assert');

// Require basic config files and DB connection
require('../../../utils/dbconnect');

// Global Variables for the test case
var Trainers, trainers;

// Unit Tests
describe('Model Test Trainers', function(){
    before(function(){
        // Before all tests
        Trainers = require("../../../models/trainers.js");
    });

    describe('Trainers', function(){
        // It show create a new document in the database
        it('add a trainers', function(done){
            trainers = new Trainers({ name: 'trainers'+Math.floor((Math.random() * 10) + 1)});
            trainers.save(done);
        });

    });
});
