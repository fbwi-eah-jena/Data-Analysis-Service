var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://pRobert:422114328@itprojekt-shard-00-00-z69ww.mongodb.net:27017,itprojekt-shard-00-01-z69ww.mongodb.net:27017,itprojekt-shard-00-02-z69ww.mongodb.net:27017/test?ssl=true&replicaSet=ITProjekt-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
  // Paste the following examples here
	db.collection('test').update([
   // MongoDB adds the _id field with an ObjectId if _id is not present
	{ Nummer: "1", Zutaten: ["Gurke", "Tomate", "Olive", "Chilli" ], Gewicht: "5", Preis: "5" },
	{ Nummer: "2", Zutaten: ["Gurke", "Tomate", "Olive"], Gewicht: "2", Preis: "5" },
    { Nummer: "3", Zutaten: ["Gurke", "Tomate", "Olive"], Gewicht: "1", Preis: "5" },
	{ Nummer: "4", Zutaten: ["Gurke", "Tomate", "Olive"], Gewicht: "3", Preis: "5" },
	{ Nummer: "5", Zutaten: ["Gurke", "Tomate", "Olive"], Gewicht: "10", Preis: "5" },

])
.then(function(result) {
  // process result
})
console.log("Item(s) geupdated");
  db.close();
});