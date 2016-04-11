var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  	if (err) throw err;
  	var collection = db.collection('parrots');
  	
	collection.count({ 
        age: {
	      	$gt: parseInt(process.argv[2])
	    }
    }, function(err, data){
        if (err) throw err;
        console.log(data);
        db.close();
    });
});