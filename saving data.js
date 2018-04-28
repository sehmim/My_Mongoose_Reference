// THIS FILE IS TO SAVE RECORDS IN A DB AND TESTING IT TO SEE IF IS PASSED USING MOCHA

const mocha = require('mocha');
const assert = require('assert');
// Import the object MarioChar
const MarioChar = require('../models/mariochar');

// Describe tests
describe('SAVE DATA test', ()=>{
    // Create Tests
    it('Saves Data to the db', (done)=>{
        var char = new MarioChar({
            name: 'Mario'
        });

        // SAVE THEN PROMISE 
        char.save().then(()=>{
            
            assert(char.isNew == false);
            done();
        })
    });
})