var http = require('http');
var url = require('url');
var qeryString = require('querystring');

var MongoClient = require('mongodb').MongoClient;
var url1 = "mongodb://localhost:27017/mydb";
var action;
var record = new Array();

function parser(search){
	search = search.split("&");
	search.pop();
	search.shift();
	var pair1, pair2;

	pair1 = search[0].split("=");
	pair2 = search[1].split("=");
	action = search[2].split("=")[1];
	var data = {
		userName : pair1[1],
		songId : pair2[1] 
	};
	
	return data;
}


http.createServer(function(req, res){

	var myObj = parser(url.parse(req["url"])["search"]);	
	res.writeHead( 200, { "content-Type" : 'text/plain' } )

	MongoClient.connect(url1, function(err, db){
		if(err) throw err;
		var dbo = db.db("mydb");

		if(action == "remove"){
			dbo.collection("Favourites").deleteOne(myObj, function(err, obj){
				if(err) throw err;
				console.log("1 document deleted");
			});
		}
		else if(action == "insert"){
			console.log(myObj);
			dbo.collection("Favourites").insertOne(myObj, function(err, res){
				if(err) throw err;
				console.log("1 document inserted!");
			});
		}
		else if(action == "find"){
			dbo.collection("Favourites").find({userName : myObj["userName"]}, { projection: { _id: 0, userName: 1, songId: 1 }}).toArray(function(err, result) {
				if (err) throw err;
				//for(var i = 0; i < result.length; ++i) record[i] = result[i];
				console.log(result);
				res.end('_testcb(\'{"record":' + JSON.stringify(result) + ' }\')');
			});
		}
		
		db.close();
	});
 

	if(action != "find") res.end('_testcb(\'{"message" : "Successfull!" }\')');



}).listen(1337, 'localhost');

console.log("Listening on 1337");
