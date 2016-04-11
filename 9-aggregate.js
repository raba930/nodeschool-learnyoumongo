var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  	if (err) throw err;
  	var collection = db.collection('prices'),
        size = process.argv[2];
  	
	collection.aggregate([
        { 
            $match: {
                size: size
            },
        }, { $group: {
                _id: 'avgPrice',
                avgPrice: {
                    $avg: '$price'
                }
            }
        }
    ]).toArray(function(err, data) {
        if (err) throw err;
        console.log(data[0].avgPrice.toFixed(2));
        db.close();
    })
});