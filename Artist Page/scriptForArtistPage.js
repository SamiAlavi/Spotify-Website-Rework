const userAccessToken = localStorage.getItem("userAccessToken");

var songDetails = new Object();

var pink = "optRec";
var nowPlaying = "None";
var nowPlayingSrNo = "sr0";
var currentState = "paused";
var pendingRequest = "";

var relArtists;
var artistImage, artistName, relArtistID, docImg, docArtName, overlay;

var numOfTracks;
var songsArray = new Array();
var namesOfAllSongs = new Array();
var urlsOfAllSongs = new Array();
var artistsOfAllSongs = new Array();
var arrayForMix = new Array();

var reload = true;

//coldplay = "4gzpq5DPGxSnKTe4SA8HAU"

function getArtist(artistID){

	$("div#TopTracksDiv").children().each(function() {
    	while(this.attributes.length > 0)
        	this.removeAttribute(this.attributes[0].name);
	});

	var hh = '<div class="Row"><div class="srNo"><p style="padding-bottom: 3px; font-size: 20px; color: #6F6F6F">#</p></div><div class="song"><p style="padding-bottom: 3px; letter-spacing: 3px; font-size: 20px; color: #6F6F6F">SONG</p></div><div class="artist"><p style="padding-bottom: 3px; letter-spacing: 3px; font-size: 20px; color: #6F6F6F">ARTIST</p></div><div class="dailyPlays"><p style="padding-bottom: 3px; letter-spacing: 3px; font-size: 20px; color: #6F6F6F">POPULARITY</p></div><div class="time"><p style="padding-bottom: 3px; letter-spacing: 3px; font-size: 20px; color: #6F6F6F">TIME</p></div><div class="shareOpt"><p style="padding-bottom: 3px; letter-spacing: 3px; font-size: 20px; color: #6F6F6F">OPTIONS</p></div></div>';
	var tt = document.getElementById("TopTracksDiv");
	tt.innerHTML = hh;


	fetch("https://api.spotify.com/v1/artists/"+artistID, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${userAccessToken}`
		}
	})
	.then(response => response.json())
	.then(function(data){

		var artistName = data["name"];
		var artistImage = data["images"][0]["url"];
		var genres = data["genres"];
		var numOfFollowers = data["followers"]["total"];

		var aN = document.getElementById("ArtistName");
		var aI = document.getElementById("ArtistImage");
		var g = document.getElementById("Genres");

		aN.innerHTML = artistName;
		aI.src = artistImage;
		g.innerHTML = ""
		for(var i = 0; i < genres.length-1; ++i){
			g.innerHTML += genres[i] + ", ";
		}
		g.innerHTML += genres[genres.length-1] + " - Followers: " + numOfFollowers;


	});

	fetch("https://api.spotify.com/v1/artists/"+artistID+"/top-tracks?country=BR", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${userAccessToken}`
		}
	})
	.then(response => response.json())
	.then(function(data){
		console.log(data);
		songsArray = data["tracks"];
		var newDiv = "", artistNames = "", trackTime, trackSecs, trackMins;
		var tTD = document.getElementById("TopTracksDiv");
		numOfTracks = songsArray.length;

		for(var i = 0; i < numOfTracks; ++i){
			for(var j = 0; j < songsArray[i]["artists"].length-1; ++j) {
				artistNames += songsArray[i]["artists"][j]["name"] + ", ";
			}
			artistNames += songsArray[i]["artists"][songsArray[i]["artists"].length-1]["name"];
			namesOfAllSongs[i] = songsArray[i]["name"];
			urlsOfAllSongs[i] = songsArray[i]["preview_url"];
			artistsOfAllSongs[i] = artistNames;
			trackTime = songsArray[i]["duration_ms"]/1000;
			trackSecs = Math.floor(trackTime%60);
			trackMins = Math.floor(trackTime/60);
			trackTime = "" + trackMins + "m " + trackSecs + "s";
			var cd = JSON.stringify(songsArray[i]);
			newDiv = '<div class="Row" onmouseover="hoverOverDiv('+i+')" onmouseout="mouseOut('+i+')"><div class="srNo"><p style="padding-bottom: 7px; letter-spacing: 2px; font-size: 20px; color: #6F6F6F">'+(i+1);
			newDiv += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img id="img'+i+'" src="g.gif" height="15px" width="15px"></p><audio id="aud'+i+'" src="'+songsArray[i]["preview_url"];
			newDiv += '"></audio></div><div id="dDiv'+i+'" class="song"><p style="font-size: 20px; color: #DADADA">'+songsArray[i]["name"];
			newDiv += '</p></div><div class="artist"><p style="font-size: 16px; color: #A4A3A3">'+artistNames+'</p></div><div class="dailyPlays"><p style="font-size: 20px; color: #6F6F6F">'+songsArray[i]["popularity"]+'</p></div><div class="time"><p style="font-size: 20px; color: #6F6F6F">'+trackTime+'</p></div><div class="shareOpt"><p><img id="shareOpt'+i+'" src="" alt="" width="35px" height="25px"></p></div></div>';
			tTD.innerHTML += newDiv;

			var lD = document.getElementById("img"+i);
			lD.setAttribute("onclick", "likeDislike('img"+i+"', "+cd+")");

			var dDiv = document.getElementById("dDiv"+i);
			dDiv.setAttribute("onclick", "onClickDiv("+cd+")");

			artistNames = "";
		}

	});

	fetch("https://api.spotify.com/v1/artists/"+artistID+"/related-artists", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${userAccessToken}`
		}
	})
	.then(response => response.json())
	.then(function(data){
		console.log(data);
		relArtists = data["artists"];
		for(var i = 0; i < 15; ++i){
			artistName = relArtists[i]["name"];
			artistImage = relArtists[i]["images"][0]["url"];
			relArtistID = relArtists[i]["id"];
			docImg = document.getElementById("relArt" + i);
			docArtName = document.getElementById("artName" + i);
			overlay = document.getElementById("overlay" + i);
			docImg.src = artistImage;
			docArtName.innerHTML = artistName;
			overlay.setAttribute("onclick", "getArtist('"+relArtistID+"')");
		}
	});

}

function onClickDiv(track){
	songDetails.name = track['name'];
	songDetails.url = track["preview_url"];
	var myJSON = JSON.stringify(songDetails);
	localStorage.setItem('songDetails',myJSON);
}


function nextArtist(artistID){
		localStorage["artistID"] = artistID;
		setTimeout(window.close, 10);
		if(document.getElementById("page1") != null) window.open("artPage.html");
		else window.open("ArtistPage.html");
}

function likeDislike(heartID, track){
	var heart = document.getElementById(heartID, track);

	if(heart.getAttribute("src") == "a.gif"){
		heart.setAttribute("src", "g.gif");
		$.ajax({
			url: 'http://localhost:1337/',
			type: "POST",
			data: {userName : "Ali Taimoor", songId : track["id"], action : "remove"},
			dataType: 'jsonp',
			jsonpCallback: "_testcb",
			success: function(data){
				console.log(data);
			},
			error: function(data){
				console.log(data);
			}
		});
	}
	else{
		heart.setAttribute("src", "a.gif");
		$.ajax({
			url: 'http://localhost:1337/',
			type: "POST",
			data: {userName : "Ali Taimoor", songId : track["id"], action : "insert"},
			dataType: 'jsonp',
			jsonpCallback: "_testcb",
			success: function(data){
				console.log(data);
			},
			error: function(data){
				console.log(data);
			}
		});
	}
}


function hoverOverDiv(divNo){
	var optImgDiv = document.getElementById("shareOpt" + divNo);
	optImgDiv.setAttribute("src", "option.png");
}

function mouseOut(divNo){
	var optImgDiv = document.getElementById("shareOpt" + divNo);
	optImgDiv.setAttribute("src", "");
}

function playSong(songNo){
	if(songNo < numOfTracks){
		songNo = parseInt(songNo);
		onClickDiv(songsArray[songNo]);
		setTimeout(playSong, 31000, songNo+1);
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function mix(){
	for(var i = 0; i < numOfTracks; ++i) arrayForMix[i] = i;
	arrayForMix = shuffle(arrayForMix);
	playMix(0);
}

function playMix(songNo){
	if(songNo < numOfTracks){
		onClickDiv(songsArray[arrayForMix[songNo]]);
		setTimeout(playMix, 31000, songNo+1);
	}
}

console.log("CAME HERE", localStorage["artistID"]);
getArtist(localStorage["artistID"]);
