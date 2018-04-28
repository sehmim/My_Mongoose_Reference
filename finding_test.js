// THIS FILE IS TO SAVE RECORDS IN A DB AND TESTING IT TO SEE IF IS PASSED USING MOCHA

const mocha = require('mocha');
const assert = require('assert');
// Import the object MarioChar
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Finding Records', ()=>{
    // Create Tests
    // We only need it because we're dropping everything at the end in connection.js
    beforeEach(()=>{
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save()
        })
    })

// Test for mocha to find the desired record in collection

it("Find One Record", ()=>{
    // Finding exactly ONE record with the name Mario
    // If you want the every record use MarioChar.find({}).
    MarioChar.findOne({name: 'Mario'}).then((result)=>{
        assert(result.name === 'Mario');
    });
})