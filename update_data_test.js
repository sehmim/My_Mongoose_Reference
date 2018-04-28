const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Updating records', function(){
  var char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',
      weight: 50
    });
    char.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Updates the name of a record', function(done){
    // Finding exactly ONE record with the name Mario and Update it to Luigi
      MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
          // Once updated this line is to check if it got updated 
          MarioChar.findOne({_id: char._id}).then(function(result){
              assert(result.name === 'Luigi');
              done();
          });
      });
  });
});