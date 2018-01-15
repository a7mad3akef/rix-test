var express = require('express');
var router = express.Router();
var Kofa = require('../models/model');

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://rix:rix45678@localhost:27018/discogs"; 

songs = ["57c07cc52dc25bc026c9b960", ]


router.get('/artists/', function(req, res) {
    
    MongoClient.connect(url, function(err, db) {
 
      // if (err) throw err;
      // db.collection("artists").findOne({}, function(err, result) {
      //   if (err) throw err;
      //   console.log(result);
      //   db.close();
      // });
      if (err) throw err;
      // var query = { _id: ObjectId('57beb6906e3f65b19e984b0d') };
      if (req.query.name) {
            var artist_name = req.query.name.replace('%20', ' ')
            var query = { name: artist_name }
            // var query = { _id: ObjectId(req.query.id) };
            db.collection("artists").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            // var the_result = result[0];
            // var the_result = {}
            // the_result.name = result[0].name
            // var new_releases = [];
            // result[0].releases.forEach(function(element, index, array){
            //     var newRelease = {}
            //     newRelease.title = element.title
            //     newRelease.link= 'https://kofa.localtunnel.me/api/releases?id='+element._id;;
            //     new_releases.push(newRelease);
            // });
            // console.log(new_releases)
            // the_result.releases = new_releases
            // // result.link = 'https://kofa.localtunnel.me/api/artists?id='+result[0]._id;
            // the_result.links= {};
            // the_result.links.self = 'https://kofa.localtunnel.me/api/artists?id='+result[0]._id;
            // console.log(the_result);
            db.close();

            res.send(result)
          });
      } else if (req.query.id) {
            var query = { _id: ObjectId(req.query.id) };
            db.collection("artists").find(query).toArray(function(err, result) {
                if (err) throw err;
                console.log(result)
                db.close();

                res.send(result);
            });

      } else {
            res.send('please enter a valid url!');
      }
    });
})

router.get('/releases/', function(req, res) {
    
    MongoClient.connect(url, function(err, db) {
 
      // if (err) throw err;
      // db.collection("artists").findOne({}, function(err, result) {
      //   if (err) throw err;
      //   console.log(result);
      //   db.close();
      // });
      if (err) throw err;
      // var query = { _id: ObjectId('57beb6906e3f65b19e984b0d') };
      if (req.query.id) {
            var query = { _id: ObjectId(req.query.id) };
            db.collection("releases").find(query).toArray(function(err, result) {
            if (err) throw err;
            // the_result = {};
            // the_result.release_title = result[0].title;
            
            // var new_tracklist = [];
            // console.log(result[0].tracklist)
            // result[0].tracklist.forEach(function(element, index, array){
            //     var newTracklist = {}
            //     newTracklist.title = element.title
            //     newTracklist.link= 'https://kofa.localtunnel.me/api/songs?id='+element.song_id;;
            //     new_tracklist.push(newTracklist);
            // });
            db.close();
            // the_result.tracklist = new_tracklist
            res.send(result)
      });
      } else {
            res.send('please enter a valid url!')
      }
      
    });
})

router.get('/songs/', function(req, res) {
    
    MongoClient.connect(url, function(err, db) {
 
      // if (err) throw err;
      // db.collection("artists").findOne({}, function(err, result) {
      //   if (err) throw err;
      //   console.log(result);
      //   db.close();
      // });
      if (err) throw err;
        if (req.query.id){    
            // var query = { _id: ObjectId('57beb6906e3f65b19e984b0d') };
            var query = { _id: ObjectId(req.query.id) };
            db.collection("songs").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            // // var the_result = result[0];
            // var the_result = {}
            // the_result.title = result[0].title
            // the_result.duration = result[0].duration
            // // result.link = 'https://kofa.localtunnel.me/api/artists?id='+result[0]._id;
            // // the_result.links= {};
            // the_result.releases_link = 'https://kofa.localtunnel.me/api/releases?id='+result[0].release_id;
            // the_result.artsist_link = 'https://kofa.localtunnel.me/api/artists?name='+result[0].join_artist[0];
            // console.log(the_result);
            db.close();

            res.send(result)
          });
        } else {
            res.send('please enter a valid url!')
        }
    });
})


router.get('/',function(req, res){
    res.send('Hello')
})

// router.get('/kofa/', function (req, res) {
// 	// res.send({type:'Get'})
// 	var query = {};

//     if(req.query.id)
//     {
//         query._id = req.query.id;
//     }

// 	Kofa.find(query).then(function(kofa){
// 		// link = 'http://' + req.headers.host + '/api/kofa?id='+kofa[0]._id
// 		// console.log(kofa[0].title)
// 		// res.send(kofa)
		

//         var returnBooks = [];
//         kofa.forEach(function(element, index, array){
//             var newBook = element.toJSON();
//             newBook.links= {};
//             newBook.links.self = 'http://' + req.headers.host + '/api/kofa?id=' + newBook._id
//             returnBooks.push(newBook);
//         });
//         res.json(returnBooks);
        
// 	});
// })




// router.get('/kofa/:kofaId', function(req, res) {
// 	console.log(req.params.kofaId);
// 	res.send('good')
// })




router.post('/rixx', function (req, res) {
    console.log(req.body.id);
	MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var query = { _id: ObjectId(req.body.id) };
      db.collection("songs").find(query).toArray(function(err, result) {
        if (err) throw err;
        delete result[0]._id
        result[0].user = "root"
        result[0].song_id = req.body.id
        result[0].likes = []
        result[0].dislikes = []
        result[0].comments = []
        result[0].pushes = []
        db.collection("events").insertOne(result[0], function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
        console.log(result)
      });
      
      res.send('new event added!');
    });
	
    
});


router.get('/events',function (req, res){
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
        var query = {}
        db.collection("events").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            db.close();
            res.send(result)
        });    
    }); 
})

router.post('/events',function (req, res) {
    console.log(req.body.id);

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var query = {_id: ObjectId(req.body.id)}
        db.collection("events").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            if (req.body.action == 0) {
                result[0].likes.push(req.body.user)
            } else if (req.body.action == 1) {
                result[0].dislikes.push(req.body.user)
            } else if (req.body.action == 2) {
                var comment = {
                    user: req.body.user,
                    comment: req.body.comment
                }  
                result[0].comments.push(comment) 
            } else if (req.body.action == 3) {
                result[0].pushes.push(req.body.user)       
            } else {
                res.send('please choose action number')
            }

            db.collection("events").updateOne(query, result[0], function(err, res) {
                if (err) throw err;
                console.log("1 document updated");
                db.close();
            });
            console.log(result)
        });
      // var myquery = { _id: ObjectId(req.body.id) };
      // var newvalues = { user: "Mickey", address: "Egypt" };
      // db.collection("events").updateOne(myquery, newvalues, function(err, res) {
      //   if (err) throw err;
      //   console.log("1 document updated");
      //   db.close();
      // });

    });
    res.json('good')
});





module.exports = router;