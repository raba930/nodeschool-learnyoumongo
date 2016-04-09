var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  	if (err) return console.log('ERROR: ', err);
  	var collection = db.collection('parrots'),
  		age = parseInt(process.argv[2]);
  	collection.find({age: { $gt: age } }).toArray(function(err, data) {
  		if (err) return console.log('ERROR: ', err);
  		console.log(data);
  		db.close();
  	});
});