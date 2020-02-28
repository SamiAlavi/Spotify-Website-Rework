
const userAccessToken = localStorage.getItem('userAccessToken');
var trackArray, allTracks, audio, state = "paused", totalTime = 0, repeater;
var numOfTracks;
var songDetails= new Object();

function getAlbum(playlistID){

	fetch(playlistID, {
		method: "GET",
		headers : {
			Authorization: `Bearer ${userAccessToken}`
		}
	})
	.then(response => response.json())
	.then(function(data){
		console.log(data);

		numOfTracks = data["tracks"]["total"];

		allTracks = data["tracks"]["items"];

		var playlistName = data["name"];
		var followedBy = data["followers"]["total"];

		var pL = document.getElementById("playlistName");
		pL.innerHTML = playlistName;

		pL = document.getElementById("followers");
		pL.innerHTML = "Followed by " + followedBy + " people";

		var plImage = data["images"][0]["url"];
		pL = document.getElementById("playlistImage");
		pL.style.backgroundImage = "url(" + plImage + ")";

		var i, track, trackNumber, trackName, trackTime, currentTrack = 0;

		for(i = 0; i < numOfTracks; i++){

			if(allTracks[i]["track"]["preview_url"] == null) continue;
			
			createNewTrackDiv(allTracks, i, currentTrack);
			currentTrack++;			

		}

		var hours = Math.floor(totalTime/3600000);
		var mins = Math.ceil((totalTime/60000)%60);

		pL = document.getElementById("playlistDetails");
		pL.innerHTML = "" + currentTrack + " songs - " + hours + " hr " + mins + " min";


	});


}

function playAll(songNo){
	if(songNo < numOfTracks){
		onClickDiv(allTracks[songNo]["track"]);
		setTimeout(playAll, 31000, songNo+1);
	}
}

function onClickDiv(track){
	songDetails.name = track['name'];
	songDetails.url = track["preview_url"];
	var myJSON = JSON.stringify(songDetails);
	localStorage.setItem('songDetails',myJSON);

	/*
	if(state == "paused"){
		audio = new Audio(url);
		audio.play();
		state = "playing"
	}
	else{
		audio.pause();
		audio.currentTime = 0;
		audio = new Audio(url);
		audio.play();
	}*/

}

function createNewTrackDiv(allTracks, i, trackNumber){
	var track = allTracks[i]["track"];
	var trackName = track["name"];
	var trackTime = track["duration_ms"]/1000;

	totalTime += track["duration_ms"];

	var trackSecs = Math.floor(trackTime%60);
	var trackMins = Math.floor(trackTime/60);

	var trackDiv = document.createElement("div");
	trackDiv.setAttribute("class", "songDiv");
	trackDiv.setAttribute("id", "songDiv"+trackNumber);
	trackDiv.setAttribute("onclick", "onClickDiv(" + JSON.stringify(track) + ")");
	trackDiv.setAttribute("onmouseover", "repeater=setInterval(hoverOverDiv(" + trackNumber + "), 0.5)");
	trackDiv.setAttribute("onmouseout", "mouseOut(" + trackNumber + ")");
	trackDiv.style.top = "" + (300+(44*trackNumber)) + "px";

	var srNoDiv = document.createElement("div");
	srNoDiv.setAttribute("class", "srNo");
	srNoDiv.setAttribute("id", ""+(trackNumber+1));
	srNoDiv.style.cursor = "default";
	srNoDiv.innerHTML = '<font class="fontTheme">' + (trackNumber+1) + '</font>';

	var heartDiv = document.createElement("div");
	heartDiv.setAttribute("class", "heartDiv");
	heartDiv.setAttribute("id", "heartDiv"+trackNumber);
	heartDiv.innerHTML = '<img src="images/p.png" width="25px" height="25px">';

	var songDiv = document.createElement("div");
	songDiv.setAttribute("class", "song");
	songDiv.setAttribute("id", "song"+trackNumber);
	songDiv.style.cursor = "pointer";
	songDiv.innerHTML = '<font class="fontTheme">' + trackName + '</font>';

	var optionDiv = document.createElement("div");
	optionDiv.setAttribute("class", "optionDropDown");
	optionDiv.setAttribute("id", "optionDiv"+trackNumber);
	optionDiv.innerHTML = '<img id=optionDivImg' + trackNumber + ' src="" alt="" width="35px" height="25px">';

	var timeDiv = document.createElement("div");
	timeDiv.setAttribute("class", "time");
	timeDiv.setAttribute("id", "timeDiv"+trackNumber);
	timeDiv.style.cursor = "default";
	timeDiv.innerHTML = '<font class="fontTheme">' + trackMins + 'm ' + trackSecs + 's' + '</font>';

	var ratingDiv = document.createElement("div");
	ratingDiv.setAttribute("class", "rating");
	ratingDiv.setAttribute("id", "ratingDiv"+trackNumber);
	ratingDiv.innerHTML = '';

	trackDiv.append(srNoDiv);
	trackDiv.append(heartDiv);
	trackDiv.append(songDiv);
	trackDiv.append(optionDiv);
	trackDiv.append(timeDiv);
	trackDiv.append(ratingDiv);

	var albumDiv = document.getElementById("albumDiv");
	albumDiv.append(trackDiv);


}

function hoverOverDiv(divNo){
	var optImgDiv = document.getElementById("optionDivImg" + divNo);
	optImgDiv.setAttribute("src", "images/option.png");
}

function mouseOut(divNo){
	var optImgDiv = document.getElementById("optionDivImg" + divNo);
	optImgDiv.setAttribute("src", "");
	clearInterval(repeater);
}

var sendurl=localStorage.getItem("sendurl");
getAlbum(sendurl);