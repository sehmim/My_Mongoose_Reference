const mongoose = require('mongoose');


// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before the tests run.

before((done)=>{

        //Connect to mongoDB
        mongoose.connect('mongodb://localhost/testaroo');

        mongoose.connection.once('open', ()=>{
            console.log("Connected to Database");
            // stop the asynchronous function before() by doing done()
            done();
        }).on('error', (error)=>{
            console.log("Error", error)
        });
});


// THIS EMPTYs THE DATABASE
beforeEach((done)=>{
    // DROP THE COLLECTION
    mongoose.connection.collections.mariochars.drop(()=>{
        done();
    })

})
