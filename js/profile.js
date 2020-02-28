var songDetails= new Object();

function opentrack(name,url){
	songDetails.name = name;
	songDetails.url = url;
	var myJSON = JSON.stringify(songDetails);
	localStorage.setItem('songDetails',myJSON);
}

$(document).ready(function(){

	var songidscombined='';
	var userName = document.getElementById("userName");
	const userAccessToken = localStorage.getItem('userAccessToken');
	var favSongs = new Array();

		
		$.ajax({

			url: 'http://localhost:1337/',
			type: "POST",
			data: {userName : "Ali Taimoor", songId : "", action : "find"},
			dataType: 'jsonp',
			jsonpCallback: "_testcb",
			success: function(data){
				data = JSON.parse(data);
				console.log(data);
				var record = data["record"];
				for(var i = 0; i < record.length; ++i){
					favSongs[i] = record[i]["songId"];	
				}	


				for(var i = 0; i < favSongs.length; ++i){
		if(i==favSongs.length-1){
			songidscombined += favSongs[i];
		}
		else{
			songidscombined += favSongs[i] + ',';
		}		 
	}

	var url = "https://api.spotify.com/v1/tracks/?ids="+songidscombined
	fetch(url, {
	  method: "GET",
	  headers: {
	    Authorization: `Bearer ${userAccessToken}`     
	  }
	})
	.then(response => response.json())
	.then( function(data){
		console.log(data);

		//Tracks
		var text="<div class='px-3'></div>";
		var tracks = data.tracks;
		for (i = 0; i < tracks.length; i++) {
  		text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"opentrack(&quot;"+tracks[i].name+"&quot;,&quot;"+tracks[i].preview_url+"&quot;)'><img src='"+ tracks[i].album.images[1].url + "'><div class='img_description_layer'>"+"<p class='img_description'>"+tracks[i].name+
  			"<br><br>"+tracks[i].artists[0].name+"</p></div></div>";
		}
		document.getElementById("favmus").innerHTML = text;
		}
	);
			},
			error: function(data){
				console.log(data);
			}

		});


	//test array
	//for making query, put in ajax after receiving ids
	
	

});

