// THIS FILE IS TO DELETE RECORDS From A DB
// AND TESTING IT TO SEE IF IS PASSED USING MOCHA

const mocha = require('mocha');
const assert = require('assert');
// Import the object MarioChar
const MarioChar = require('../models/mariochar');

var char;
// Describe tests
describe('Delete STUFF', ()=>{
    // ADD DATA SO WE CAN DELETE IT
    beforeEach(function(done){
        char = new MarioChar({
          name: 'Mario'
        });
        char.save().then(function(){
          done();
        });
      });
    
    // NOW TEST 
    it('Deleted Record', (done)=>{
        // Find the record with the name Mario and then
        MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
            // THIS LINE IS TO CHECK IF IT GOT DELETED
            // IF RETURNS NULL MEANS TEST IS PASS
            MarioChar.findOne({name: 'Mario'}).then(function(result){
              assert(result === null);
              done();
            });
          });
        });
});