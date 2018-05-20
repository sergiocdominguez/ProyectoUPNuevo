var mongoose = require("mongoose");
mongoose.connect( "mongodb://localhost/tp2"
                   //"mongodb+srv://admin1:popote14@cluster0-lrn3m.mongodb.net/test?retryWrites=true"
, function(err, db) {
      if (err) throw err;
      console.log("BD creada!");
     // db.close();
});

/*
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});
*/

module.exports.mongoose = mongoose;