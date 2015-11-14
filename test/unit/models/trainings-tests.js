// Trainings Test Cases
// -----------------------------

// Modules Dependencies:
//  - Assert (http://nodejs.org/api/assert.html)
var assert = require('assert');

// Require basic config files and DB connection
require('../../../utils/dbconnect');

// Global Variables for the test case
var Trainings, trainings;

// Unit Tests
describe('Model Test Trainings', function(){
    before(function(){
        // Before all tests
        Trainings = require("../../../models/trainings.js");
    });

    describe('Trainings', function(){
        // It show create a new document in the database
        it('add a trainings', function(done){
            trainings = new Trainings({ name: 'trainings'+Math.floor((Math.random() * 10) + 1)});
            trainings.save(done);
        });

    });
});
