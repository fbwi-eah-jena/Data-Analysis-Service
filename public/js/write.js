var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://pRobert:422114328@itprojekt-shard-00-00-z69ww.mongodb.net:27017,itprojekt-shard-00-01-z69ww.mongodb.net:27017,itprojekt-shard-00-02-z69ww.mongodb.net:27017/test?ssl=true&replicaSet=ITProjekt-shard-0&authSource=admin";

var www = require ('../../server');
var arrayId = new Array(6);


//Exported module print for use in server.js
module.exports = {	
	print: function(topic, message){	
		analyse(topic, message);
	}		
};

function analyse(topic, message) {
	//write main informations of new orders in the database
	if(topic == "order/new"){
		console.log('Topic: ' + topic + ' Message: ' + message)				
		
		//Search for token (length of 10) in the message
		var regex = /token/ig, result, indices = [];
		var result = regex.exec(message);
		var token = message.toString().substr(result.index + 10, 10);
		console.log("Token: " + token);	

		//Search for name in the message
		var nameStart = message.indexOf("name") + 9;
		var nameEnd	=	message.indexOf('"', nameStart);
		var nameLength = nameEnd - nameStart;
		var name = message.toString().substr(nameStart, nameLength);
		console.log("Name: " + name);
		
		//search for IDs in the message
		var regex = /id/gi, result, indices = [];
		var x = 0;
		while (result = regex.exec(message)) {
			arrayId[x] = message.toString().substr(result.index + 6, 1);
			x++;
		}		
		
		//write it in the Database
		MongoClient.connect(uri, function(err, db) {
		db.collection('fancydrink').insertMany([
			{ Topic: topic, Token: token, Name: name, FruitJuice: arrayId[1], FruitPuree: arrayId[3], FruitPieces: arrayId[5]},
		])
		console.log (arrayId);
		console.log("Item(s) hinzugefuegt");
		
		db.close();
		});
		
	}else if (topic == "product"){ 
		console.log('Topic: ' + topic + ' Message: ' + message)
		
		//Search for productID
		var productId = message.toString().substr(message.indexOf("productId")+12, 6);
		console.log("productID: " + productId);
	
		//Search for productWeight
		var weightStart = message.indexOf("productWeight") + 16;
		var weightEnd	=	message.indexOf('"', weightStart);
		var weightLength = weightEnd - weightStart;
		var productWeight = message.toString().substr(weightStart, weightLength);
		console.log("productWeight: " + productWeight);
		
		//get Date
		var format = require('date-format');
		var date = format('dd.MM.yyyy', new Date())
		console.log("Date: " + date);
		
		
		//Insert information to the	mongoDB
		MongoClient.connect(uri, function(err, db) {
			// Paste the following examples here
			db.collection('stockremoval').insertMany([
		   // MongoDB adds the _id field with an ObjectId if _id is not present
			{ Topic: topic, Date: date, ProductId: productId, ProductWeight: productWeight},
			])
			
		.then(function(result) {
		  // process result
		})
		
		console.log("Item(s) hinzugefuegt");
		  db.close(); 
		});
		
	}

	/*else if(){	//other topics can be added here
	
	}*/
	
};