var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var databaseName = 'discogs'
var url = 'mongodb://' + 'adminrole' + ':' + 'susuSUSU1234!%40%23%24' + '@127.0.0.1:' + '27017' + '/' + databaseName;

songs = ["57c07cc52dc25bc026c9b960"]

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("events", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

// MongoClient.connect(url, function(err, db) {
 
//   // if (err) throw err;
//   // db.collection("artists").findOne({}, function(err, result) {
//   //   if (err) throw err;
//   //   console.log(result);
//   //   db.close();
//   // });
//   if (err) throw err;
//   var query = { _id: ObjectId('57beb6906e3f65b19e984b0d') };
//   db.collection("artists").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


var mongoose = require('mongoose');
mongoose.connect(url,{useMongoClient: true}, function(){
  console.log('connected')
});
mongoose.Promise = global.Promise;


// var Schema = mongoose.Schema;


// var kofaSchema = new Schema({
//   title: {type: String}
// })

// var Kofa = mongoose.model('artists', kofaSchema);
// var query = { _id: '57beb77d6e3f65b19efcc2ab'};
// Kofa.find(query).then(function(kofa){
//     console.log(kofa)
//     // link = 'http://' + req.headers.host + '/api/kofa?id='+kofa[0]._id
//     // console.log(kofa[0].title)
//     // res.send(kofa)
// });