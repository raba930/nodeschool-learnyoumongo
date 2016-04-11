var mongo = require('mongodb').MongoClient,
    person = { 
        firstName: process.argv[2],
        lastName: process.argv[3]
    }

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  	if (err) throw err;
  	var collection = db.collection('docs');
  	collection.insert(person, function(err, data){
        if (err) throw err;
        console.log(JSON.stringify(person));
        db.close();
    });
});