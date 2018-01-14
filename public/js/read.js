var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://pRobert:422114328@itprojekt-shard-00-00-z69ww.mongodb.net:27017,itprojekt-shard-00-01-z69ww.mongodb.net:27017,itprojekt-shard-00-02-z69ww.mongodb.net:27017/test?ssl=true&replicaSet=ITProjekt-shard-0&authSource=admin";


MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  
  db.collection("fancydrink").find({Topic:"order/new"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
