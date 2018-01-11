const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var conf = require('./config.json');
var write = require('./public/js/write');
var db
var result
const path = require('path')
const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://pRobert:422114328@itprojekt-shard-00-00-z69ww.mongodb.net:27017,itprojekt-shard-00-01-z69ww.mongodb.net:27017,itprojekt-shard-00-02-z69ww.mongodb.net:27017/test?ssl=true&replicaSet=ITProjekt-shard-0&authSource=admin";

MongoClient.connect(uri, function(err, database) {
  if (err) throw err;
  db = database
app.listen(3000, function() {
  console.log('listening on 3000')
})
});

// connect to the broker
const mqtt = require('mqtt');
const mqttClient = mqtt.connect(conf.mqttbroker);

// subscribe every topic
mqttClient.on('connect', () => {
	console.log('Connected to mqtt broker...');
	mqttClient.subscribe('#');
});

//send the message to write.js
mqttClient.on('message', function (topic, message){
	write.print(topic,message)	
});

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
db.collection("fancydrink").find({}).count(function(err, result) {
	if (err) throw err;
	//console.log(result);

	var JuiceG = result;
	console.log(JuiceG + " total amount of drinks");

	  
			db.collection("fancydrink").find({FruitJuice: "1"}).count(function(err, result) {
			if (err) throw err;
			//console.log(result);
				
			var Juice1 = result;
			console.log(Juice1  + " Orangejuice");
			
			 
					db.collection("fancydrink").find({FruitJuice: "2"}).count(function(err, result) {
					if (err) throw err;
					//console.log(result);
					
					var Juice2 = result;
					console.log(Juice2  + " Appeljuice");
							
					
							db.collection("fancydrink").find({FruitJuice: "3"}).count(function(err, result) {
							if (err) throw err;
							//console.log(result);
							
							var Juice3 = result;
							console.log(Juice3  + " Bananajuice");
									
							  
									db.collection("fancydrink").find({FruitJuice: "4"}).count(function(err, result) {
									if (err) throw err;
									//console.log(result);
									
									var Juice4 = result;
									console.log(Juice4  + " Cherryjuice");
										
								  
											db.collection("fancydrink").find({FruitJuice: "5"}).count(function(err, result) {
											if (err) throw err;
											//console.log(result);
														
											var Juice5 = result;
											console.log(Juice5  + " Currantjuice");
										  
										  
													db.collection("fancydrink").find({FruitJuice: "6"}).count(function(err, result) {
													if (err) throw err;
													//console.log(result);
														
													var Juice6 = result;	
													console.log(Juice6 + " Grapejuice");
														
														
															db.collection("fancydrink").find({FruitJuice: "7"}).count(function(err, result) {
															if (err) throw err;
															//console.log(result);
															
															var Juice7 = result;	
															console.log(Juice7 + " Tomatojuice");
																

												
db.collection("fancydrink").find({}).count(function(err, result) {
	if (err) throw err;
	//console.log(result);

	var PiecesG = result;
	//console.log(PiecesG + " Gesamtzahl");


			db.collection("fancydrink").find({FruitPieces: "1"}).count(function(err, result) {
			if (err) throw err;
			//console.log(result);

			var Pieces1 = result;
			console.log(Pieces1 + " Bananapieces");
			
			
					db.collection("fancydrink").find({FruitPieces: "2"}).count(function(err, result) {
					if (err) throw err;
					//console.log(result);
					
					var Pieces2 = result;
					console.log(Pieces2 + " Blueberries");
							
			
							db.collection("fancydrink").find({FruitPieces: "3"}).count(function(err, result) {
							if (err) throw err;
							//console.log(result);
							
							var Pieces3 = result;
							console.log(Pieces3 + " Mangopieces");
									
								
									db.collection("fancydrink").find({FruitPieces: "4"}).count(function(err, result) {
									if (err) throw err;
									//console.log(result);
									
									var Pieces4 = result;
									console.log(Pieces4 + " Pineapplepieces");
										

											db.collection("fancydrink").find({FruitPieces: "5"}).count(function(err, result) {
											if (err) throw err;
											//console.log(result);
	
											var Pieces5 = result;
											console.log(Pieces5 + " Raspberries");
												

													db.collection("fancydrink").find({FruitPieces: "6"}).count(function(err, result) {
													if (err) throw err;
													//console.log(result);

													var Pieces6 = result;
													console.log(Pieces6 + " Strawberrypieces");
														
																
											
db.collection("fancydrink").find({}).count(function(err, result) {
	if (err) throw err;
	//console.log(result);

	var PureeG = result;
	//console.log(PureeG +" Gesamtanzahl");


			db.collection("fancydrink").find({FruitPuree: "1"}).count(function(err, result) {
			if (err) throw err;
			//console.log(result);

			var Puree1 = result;
			console.log(Puree1 +" Currantpuree");
			

					db.collection("fancydrink").find({FruitPuree: "2"}).count(function(err, result) {
					if (err) throw err;
					//console.log(result);

					var Puree2 = result;
					console.log(Puree2 +" Kiwipuree");
							

							db.collection("fancydrink").find({FruitPuree: "3"}).count(function(err, result) {
							if (err) throw err;
							//console.log(result);

							var Puree3 = result;
							console.log(Puree3 +" Mangopuree");
									
									
									db.collection("fancydrink").find({FruitPuree: "4"}).count(function(err, result) {
									if (err) throw err;
									//console.log(result);

									var Puree4 = result;
									console.log(Puree4 +" Peachpuree");
										

											db.collection("fancydrink").find({FruitPuree: "5"}).count(function(err, result) {
											if (err) throw err;
											//console.log(result);

											var Puree5 = result;
											console.log(Puree5 +" Pearpuree");
												

													db.collection("fancydrink").find({FruitPuree: "6"}).count(function(err, result) {
													if (err) throw err;
													//console.log(result);

													var Puree6 = result;
													console.log(Puree6 +" Strawberrypuree");
														

															res.render('index.ejs', {Puree1, Puree2, Puree3, Puree4, Puree5, Puree6, PureeG, Juice1, Juice2, Juice3, Juice4, Juice5, Juice6, Juice7, JuiceG, Pieces1, Pieces2, Pieces3, Pieces4, Pieces5, Pieces6, PiecesG })
														
});});});});});});});});});});});});});});});});});});});});});});

})
