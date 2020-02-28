var flag='s';
var country;
var songDetails= new Object();
const userAccessToken = "BQA0w833BiLAMGgUKh7cwVJlmp8Re2oU8MhzQ0WU1SGHQTNEHTXvISWhlJWOqj9501aVLiva_-jFrt3g35vlbwInvL-1NIyDzG1vOZ-gPXqvp1ixvFxIjXZJauCt6Zfu7Gdjr1hukAha8_dGGOeKKzCCjHCRUaxsmIyme-9S0HiHhKywqKhM3Q";
localStorage.setItem('userAccessToken', userAccessToken);		
cctocountryJSON={
    "AF": "Afghanistan", 
    "AX": "Åland Islands", 
    "AL": "Albania", 
    "DZ": "Algeria", 
    "AS": "American Samoa", 
    "AD": "Andorra", 
    "AO": "Angola", 
    "AI": "Anguilla", 
    "AQ": "Antarctica", 
    "AG": "Antigua and Barbuda", 
    "AR": "Argentina", 
    "AM": "Armenia", 
    "AW": "Aruba", 
    "AU": "Australia", 
    "AT": "Austria", 
    "AZ": "Azerbaijan", 
    "BS": "Bahamas", 
    "BH": "Bahrain", 
    "BD": "Bangladesh", 
    "BB": "Barbados", 
    "BY": "Belarus", 
    "BE": "Belgium", 
    "BZ": "Belize", 
    "BJ": "Benin", 
    "BM": "Bermuda", 
    "BT": "Bhutan", 
    "BO": "Bolivia", 
    "BA": "Bosnia and Herzegovina", 
    "BW": "Botswana", 
    "BV": "Bouvet Island", 
    "BR": "Brazil", 
    "IO": "British Indian Ocean Territory", 
    "BN": "Brunei Darussalam", 
    "BG": "Bulgaria", 
    "BF": "Burkina Faso", 
    "BI": "Burundi", 
    "KH": "Cambodia", 
    "CM": "Cameroon", 
    "CA": "Canada", 
    "CV": "Cape Verde", 
    "KY": "Cayman Islands", 
    "CF": "Central African Republic", 
    "TD": "Chad", 
    "CL": "Chile", 
    "CN": "China", 
    "CX": "Christmas Island", 
    "CC": "Cocos (Keeling) Islands", 
    "CO": "Colombia", 
    "KM": "Comoros", 
    "CG": "Congo", 
    "CD": "Congo, The Democratic Republic of the", 
    "CK": "Cook Islands", 
    "CR": "Costa Rica", 
    "CI": "Cote D'Ivoire", 
    "HR": "Croatia", 
    "CU": "Cuba", 
    "CY": "Cyprus", 
    "CZ": "Czech Republic", 
    "DK": "Denmark", 
    "DJ": "Djibouti", 
    "DM": "Dominica", 
    "DO": "Dominican Republic", 
    "EC": "Ecuador", 
    "EG": "Egypt", 
    "SV": "El Salvador", 
    "GQ": "Equatorial Guinea", 
    "ER": "Eritrea", 
    "EE": "Estonia", 
    "ET": "Ethiopia", 
    "FK": "Falkland Islands (Malvinas)", 
    "FO": "Faroe Islands", 
    "FJ": "Fiji", 
    "FI": "Finland", 
    "FR": "France", 
    "GF": "French Guiana", 
    "PF": "French Polynesia", 
    "TF": "French Southern Territories", 
    "GA": "Gabon", 
    "GM": "Gambia", 
    "GE": "Georgia", 
    "DE": "Germany", 
    "GH": "Ghana", 
    "GI": "Gibraltar", 
    "GR": "Greece", 
    "GL": "Greenland", 
    "GD": "Grenada", 
    "GP": "Guadeloupe", 
    "GU": "Guam", 
    "GT": "Guatemala", 
    "GG": "Guernsey", 
    "GN": "Guinea", 
    "GW": "Guinea-Bissau", 
    "GY": "Guyana", 
    "HT": "Haiti", 
    "HM": "Heard Island and Mcdonald Islands", 
    "VA": "Holy See (Vatican City State)", 
    "HN": "Honduras", 
    "HK": "Hong Kong", 
    "HU": "Hungary", 
    "IS": "Iceland", 
    "IN": "India", 
    "ID": "Indonesia", 
    "IR": "Iran, Islamic Republic Of", 
    "IQ": "Iraq", 
    "IE": "Ireland", 
    "IM": "Isle of Man", 
    "IL": "Israel", 
    "IT": "Italy", 
    "JM": "Jamaica", 
    "JP": "Japan", 
    "JE": "Jersey", 
    "JO": "Jordan", 
    "KZ": "Kazakhstan", 
    "KE": "Kenya", 
    "KI": "Kiribati", 
    "KP": "Democratic People's Republic of Korea", 
    "KR": "Korea, Republic of", 
    "XK": "Kosovo", 
    "KW": "Kuwait", 
    "KG": "Kyrgyzstan", 
    "LA": "Lao People's Democratic Republic", 
    "LV": "Latvia", 
    "LB": "Lebanon", 
    "LS": "Lesotho", 
    "LR": "Liberia", 
    "LY": "Libyan Arab Jamahiriya", 
    "LI": "Liechtenstein", 
    "LT": "Lithuania", 
    "LU": "Luxembourg", 
    "MO": "Macao", 
    "MK": "Macedonia, The Former Yugoslav Republic of", 
    "MG": "Madagascar", 
    "MW": "Malawi", 
    "MY": "Malaysia", 
    "MV": "Maldives", 
    "ML": "Mali", 
    "MT": "Malta", 
    "MH": "Marshall Islands", 
    "MQ": "Martinique", 
    "MR": "Mauritania", 
    "MU": "Mauritius", 
    "YT": "Mayotte", 
    "MX": "Mexico", 
    "FM": "Micronesia, Federated States of", 
    "MD": "Moldova, Republic of", 
    "MC": "Monaco", 
    "MN": "Mongolia", 
    "ME": "Montenegro", 
    "MS": "Montserrat", 
    "MA": "Morocco", 
    "MZ": "Mozambique", 
    "MM": "Myanmar", 
    "NA": "Namibia", 
    "NR": "Nauru", 
    "NP": "Nepal", 
    "NL": "Netherlands", 
    "AN": "Netherlands Antilles", 
    "NC": "New Caledonia", 
    "NZ": "New Zealand", 
    "NI": "Nicaragua", 
    "NE": "Niger", 
    "NG": "Nigeria", 
    "NU": "Niue", 
    "NF": "Norfolk Island", 
    "MP": "Northern Mariana Islands", 
    "NO": "Norway", 
    "OM": "Oman", 
    "PK": "Pakistan", 
    "PW": "Palau", 
    "PS": "Palestinian Territory, Occupied", 
    "PA": "Panama", 
    "PG": "Papua New Guinea", 
    "PY": "Paraguay", 
    "PE": "Peru", 
    "PH": "Philippines", 
    "PN": "Pitcairn", 
    "PL": "Poland", 
    "PT": "Portugal", 
    "PR": "Puerto Rico", 
    "QA": "Qatar", 
    "RE": "Reunion", 
    "RO": "Romania", 
    "RU": "Russian Federation", 
    "RW": "Rwanda", 
    "SH": "Saint Helena", 
    "KN": "Saint Kitts and Nevis", 
    "LC": "Saint Lucia", 
    "PM": "Saint Pierre and Miquelon", 
    "VC": "Saint Vincent and the Grenadines", 
    "WS": "Samoa", 
    "SM": "San Marino", 
    "ST": "Sao Tome and Principe", 
    "SA": "Saudi Arabia", 
    "SN": "Senegal", 
    "RS": "Serbia", 
    "SC": "Seychelles", 
    "SL": "Sierra Leone", 
    "SG": "Singapore", 
    "SK": "Slovakia", 
    "SI": "Slovenia", 
    "SB": "Solomon Islands", 
    "SO": "Somalia", 
    "ZA": "South Africa", 
    "GS": "South Georgia and the South Sandwich Islands", 
    "ES": "Spain", 
    "LK": "Sri Lanka", 
    "SD": "Sudan", 
    "SR": "Suriname", 
    "SJ": "Svalbard and Jan Mayen", 
    "SZ": "Swaziland", 
    "SE": "Sweden", 
    "CH": "Switzerland", 
    "SY": "Syrian Arab Republic", 
    "TW": "Taiwan", 
    "TJ": "Tajikistan", 
    "TZ": "Tanzania, United Republic of", 
    "TH": "Thailand", 
    "TL": "Timor-Leste", 
    "TG": "Togo", 
    "TK": "Tokelau", 
    "TO": "Tonga", 
    "TT": "Trinidad and Tobago", 
    "TN": "Tunisia", 
    "TR": "Turkey", 
    "TM": "Turkmenistan", 
    "TC": "Turks and Caicos Islands", 
    "TV": "Tuvalu", 
    "UG": "Uganda", 
    "UA": "Ukraine", 
    "AE": "United Arab Emirates", 
    "GB": "United Kingdom", 
    "US": "United States", 
    "UM": "United States Minor Outlying Islands", 
    "UY": "Uruguay", 
    "UZ": "Uzbekistan", 
    "VU": "Vanuatu", 
    "VE": "Venezuela", 
    "VN": "Viet Nam", 
    "VG": "Virgin Islands, British", 
    "VI": "Virgin Islands, U.S.", 
    "WF": "Wallis and Futuna", 
    "EH": "Western Sahara", 
    "YE": "Yemen", 
    "ZM": "Zambia", 
    "ZW": "Zimbabwe"
} 
$(function() {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
    $('.demo').toggleClass('demoactive');
    $('#container').toggleClass('active');
    $('.disp').toggleClass('dispnone');
    $('.al').toggleClass('alr');
    $('.hov').toggleClass('hovactive');


    if (flag=='s'){
			$('#spinAnim').removeClass('spin-reverse');
			$('#spinAnim').addClass('spin');
			flag='';
		}
		else{
			$('#spinAnim').removeClass('spin');
			$('#spinAnim').addClass('spin-reverse');
			flag='s';
		}
  });
});

//Home Click
$("#dispHome").click(function(){
	$("#home").css("display", "inline-block");
	$("#trending").css("display", "none");
	$("#playlist").css("display", "none");
	$("#profile").css("display", "none");	
	$("#search").css("display", "none");
	$("#maps").css("display", "none");
	$("#artist").css("display", "none");	
	$("#album").css("display", "none");
});

//Trending Click
$("#dispTrending").click(function(){
	$("#home").css("display", "none");
	$("#trending").css("display", "inline-block");
	$("#playlist").css("display", "none");
	$("#profile").css("display", "none");		
	$("#search").css("display", "none");	
	$("#maps").css("display", "none");	
	$("#artist").css("display", "none");
	$("#album").css("display", "none");	

	document.getElementById("trending").innerHTML='<object style="width:100%; height:87vh;" type="text/html" data="trending.html" ></object>';			
});

//Playlist Click
$("#dispPlaylist").click(function(){
	$("#home").css("display", "none");
	$("#trending").css("display", "none");
	$("#playlist").css("display", "inline-block");
	$("#profile").css("display", "none");		
	$("#search").css("display", "none");	
	$("#maps").css("display", "none");	
	$("#artist").css("display", "none");	
	$("#album").css("display", "none");

});

//Profile Click
$("#dispProfile").click(function(){
	$("#home").css("display", "none");
	$("#trending").css("display", "none");
	$("#playlist").css("display", "none");
	$("#profile").css("display", "inline-block");		
	$("#search").css("display", "none");
	$("#maps").css("display", "none");	
	$("#artist").css("display", "none");	
	$("#album").css("display", "none");

	document.getElementById("profile").innerHTML='<object style="width:100%; height:87vh;" type="text/html" data="profile.html" ></object>';			
});

//Maps Click
$("#dispMaps").click(function(){
	$("#home").css("display", "none");
	$("#trending").css("display", "none");
	$("#playlist").css("display", "none");
	$("#profile").css("display", "none");		
	$("#search").css("display", "none");
	$("#artist").css("display", "none");	
	$("#maps").css("display", "inline-block");	
	$("#album").css("display", "none");

	document.getElementById("maps").innerHTML='<object id="mapObject" itemscope style="width:100%; height:87vh; text-align:center" type="text/html" data="maps.html" ></object>';
	
});

//Artist Click
$("#dispArtist").click(function(){
	$("#home").css("display", "none");
	$("#trending").css("display", "none");
	$("#playlist").css("display", "none");
	$("#profile").css("display", "none");		
	$("#search").css("display", "none");
	$("#artist").css("display", "inline-block");	
	$("#maps").css("display", "none");	
	$("#album").css("display", "none");
});

//Album Click
$("#dispAlbum").click(function(){
	$("#home").css("display", "none");
	$("#trending").css("display", "none");
	$("#playlist").css("display", "none");
	$("#profile").css("display", "none");		
	$("#search").css("display", "none");
	$("#artist").css("display", "none");	
	$("#maps").css("display", "none");	
	$("#album").css("display", "inline-block");
});

//Variables
var progress;							
var obj = document.createElement("audio");
obj.id = "player";
obj.volume = 1;
obj.autoPlay = false;
obj.preLoad = true;
obj.controls = true;

//Home Click
function showhome(){
	document.getElementById("dispHome").click();
}

//Genres & Mood result click
function opengenre(url,genre){
	fetch(url+"/playlists", {
	  method: "GET",
	  headers: {
	    Authorization: `Bearer ${userAccessToken}`     
	  }
	})
	.then(response => response.json())
	.then( function(data){
		var text='';
		//Playlists
		text +="<div class='px-5 testbor'><h1 class='text-light'>Playlists ("+genre+")</h1></div>";
		var playlists = data.playlists.items;
		for (i = 0; i < playlists.length; i++) {
			if(playlists[i].images.length == 0) {}
			else {
			  text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"openplaylist(&quot;"+playlists[i].href+"&quot;)'><img src='"+ playlists[i].images[0].url + "'><div class='img_description_layer'>"+"<p class='img_description'>"+playlists[i].name+
				  "</p></div></div>";
			}				  		
		}
		$("#home").css("display", "none");
		$("#trending").css("display", "none");
		$("#playlist").css("display", "none");
		$("#profile").css("display", "none");
		$("#search").css("display", "block");		
		$("#maps").css("display", "none");	
		$("#album").css("display", "none");
		document.getElementById("results").innerHTML = text;
	}
	);				
}

//Search - Track result click
function opentrack(name,url){
	songDetails.name = name;
	songDetails.url = url;
	var myJSON = JSON.stringify(songDetails);
	setMusicPlayer(myJSON);
}


//Album Click
function openalbum(albumID){
	console.log(albumID);
	localStorage.setItem("albumID",albumID);

	$("#home").css("display", "none");
	$("#trending").css("display", "none");
	$("#playlist").css("display", "none");
	$("#profile").css("display", "none");		
	$("#search").css("display", "none");			
	$("#maps").css("display", "none");			
	$("#artist").css("display", "none");	
	$("#album").css("display", "inline-block");	
	document.getElementById("album").innerHTML='<object style="width:100%; height:87vh;" type="text/html" data="Album page/AlbumPage.html" ></object>';

}

//Artist Click
function openartist(artistid){
	console.log(artistid);
	localStorage.setItem("artistID",artistid);

	$("#home").css("display", "none");
	$("#trending").css("display", "none");
	$("#playlist").css("display", "none");
	$("#profile").css("display", "none");		
	$("#search").css("display", "none");			
	$("#maps").css("display", "none");	
	$("#artist").css("display", "inline-block");
	$("#album").css("display", "none");
	document.getElementById("artist").innerHTML='<object style="width:100%; height:87vh;" type="text/html" data="Artist Page/ArtistPage.html" ></object>';

}

//Playlist result Click
function openplaylist(playlisturl){
	console.log(playlisturl);
	localStorage.setItem("sendurl",playlisturl);

	$("#home").css("display", "none");
	$("#trending").css("display", "none");
	$("#playlist").css("display", "inline-block");
	$("#profile").css("display", "none");		
	$("#search").css("display", "none");			
	$("#maps").css("display", "none");			
	$("#artist").css("display", "none");
	$("#album").css("display", "none");		
	document.getElementById("playlist").innerHTML='<object style="width:100%; height:87vh;" type="text/html" data="Playlistpage/PlaylistPage.html" ></object>';
}

//Search query results
function getresults(){
	var query = $('[name=squery]').val();
	if (query==''){}
	else{
		query=query.replace(" ","%20");
		var url = "https://api.spotify.com/v1/search?q="+query+"&type=track%2Cartist%2Calbum%2Cplaylist"
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
			var text="<div class='px-5 testbor'><h1 class='text-light'>Tracks</h1></div>";
			var tracks = data.tracks.items;
			for (i = 0; i < tracks.length; i++) {
	  		text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"opentrack(&quot;"+tracks[i].name+"&quot;,&quot;"+tracks[i].preview_url+"&quot;)'><img src='"+ tracks[i].album.images[1].url + "'><div class='img_description_layer'>"+"<p class='img_description'>"+tracks[i].name+
	  			"<br><br>"+tracks[i].artists[0].name+"</p></div></div>";
			}

			//Albums
			text +="<div class='px-5 testbor'><h1 class='text-light'>Albums</h1></div>";
			var albums = data.albums.items;
			for (i = 0; i < albums.length; i++) {
	  		text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"openalbum(&quot;"+albums[i].href+"&quot;)'><img src='"+ albums[i].images[1].url + "'><div class='img_description_layer'>"+"<p class='img_description'>"+albums[i].name+"<br><br>"+albums[i].artists[0].name+"</p></div></div>";
			}

			//Playlists
			text +="<div class='px-5 testbor'><h1 class='text-light'>Playlists</h1></div>";
			var playlists = data.playlists.items;
			for (i = 0; i < playlists.length; i++) {
				if(playlists[i].images.length == 0) {}
				else {
				  text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"openplaylist(&quot;"+playlists[i].href+"&quot;)'><img src='"+ playlists[i].images[0].url + "'><div class='img_description_layer'>"+"<p class='img_description'>"+playlists[i].name+
					  "<br><br>"+playlists[i].owner.display_name+"</p></div></div>";
				}				  		
			}

			//Artists
			text +="<div class='px-5 testbor'><h1 class='text-light'>Artists</h1></div>";
			var artists = data.artists.items;
			for (i = 0; i < artists.length; i++) {
				if(artists[i].images.length == 0) {}
				else {
				  text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"openartist(&quot;"+artists[i].id+"&quot;)'><img src='" + artists[i].images[1].url + "'><div class='img_description_layer'>"+"<p class='img_description'>"+artists[i].name+"<br><br><i class='fa fa-angle-double-up fa-2x text-success'></i>"+artists[i].popularity+"</p></div></div>";
				}				  		
			}

			$("#home").css("display", "none");
			$("#trending").css("display", "none");
			$("#playlist").css("display", "none");
			$("#profile").css("display", "none");
			$("#search").css("display", "block");		
			$("#maps").css("display", "none");		
			$("#artist").css("display", "none");
			$("#album").css("display", "none");	
			document.getElementById("results").innerHTML = text;
		}
		);
	}				
}

//On Map Country Click
function getResultsCountry(countryCode){
	var url = "https://api.spotify.com/v1/browse/new-releases?country="+countryCode+"&limit=50"
	fetch(url, {
	  method: "GET",
	  headers: {
	    Authorization: `Bearer ${userAccessToken}`     
	  }
	})
	.then(response => response.json())
	.then( function(data){
		if (data.hasOwnProperty('error')){
			console.log(data.error);	
			$("#popup").click();		
		}
		else{
			console.log(data);		
			//Albums
			text = "<div class='px-5 testbor'><h1 class='text-light'>Albums ("+ cctocountryJSON[countryCode] +")</h1></div>";
			var albums = data.albums.items;
			for (i = 0; i < albums.length; i++) {
	  		text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"openalbum(&quot;"+albums[i].href+"&quot;)'><img src='"+ albums[i].images[1].url + "'><div class='img_description_layer'>"+"<p class='img_description'>"+albums[i].name+"<br><br>"+albums[i].artists[0].name+"</p></div></div>";
			}

			$("#home").css("display", "none");
			$("#trending").css("display", "none");
			$("#playlist").css("display", "none");
			$("#profile").css("display", "none");
			$("#search").css("display", "block");		
			$("#maps").css("display", "none");		
			$("#artist").css("display", "none");
			$("#album").css("display", "none");	
			document.getElementById("results").innerHTML = text;
		}
	}
	);
}

//Binding enter to search
$('#searchquery').keypress(function (e) {
  if (e.which == 13) {
    getresults();
    return false;    //<---- Add this line
  }
});

//Genres and Mood tab click	
function genres(){
	$("#genmood").css("border-bottom", "3px solid grey");
	$("#edipick").css("border-bottom", "");
	$("#newrel").css("border-bottom", "");
	//Genres and Moods
	fetch("https://api.spotify.com/v1/browse/categories", {
	  method: "GET",
	  headers: {
	    Authorization: `Bearer ${userAccessToken}`     
	  }
	})
	.then(response => response.json())
	.then( function(data){
		console.log(data);
		var text="";
		var list = data.categories.items;
		for (i = 0; i < list.length; i++) {
	  		text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"opengenre(&quot;"+list[i].href+"&quot;,&quot;"+list[i].name+"&quot)'><img src='"+ list[i].icons[0].url + "'><div class='img_description_layer2'><p class='img_description2'>"+list[i].name+
	  			"</p></div></div>";
		}
		document.getElementById("album-playlists2").innerHTML = text;
	}
	);
}

//Editor's Pick tab click
function edpick(){
	$("#genmood").css("border-bottom", "");
	$("#edipick").css("border-bottom", "3px solid grey");
	$("#newrel").css("border-bottom", "");
	//Editor's Pick
	fetch("https://api.spotify.com/v1/browse/featured-playlists?limit=50", {
	  method: "GET",
	  headers: {
	    Authorization: `Bearer ${userAccessToken}`     
	  }
	})
	.then(response => response.json())
	.then( function(data){
		console.log(data);
		var text="";
		var nations=['0NCspsyf0OS4BsPgGhkQXM','2X5BPknxexv0e7DdDKUj0C','0OfG84TeEu3fgv7d6JhTlP','4GOnSXcPfwj1rWKcEIc3uu','5VL3IwYGDjiPCCg6uwscJs','2vwdWbVa2ozcezCUxejnU0','6yqq7LKJPaScoZ4L0Q4E7J']
		var covers=['https://pl.scdn.co/images/pl/default/c81f89b8f98c75ae1afa2283203e3901e497528c',
					'https://pl.scdn.co/images/pl/default/bf3ae51f7fd61c72a72d233f50e472a2f530f79c',
					'https://pl.scdn.co/images/pl/default/6a2bc8f9537e8f8948ade3767e51cc67939a6133',
					'https://pl.scdn.co/images/pl/default/e8352f01fd5abb84a611f4dac1da91ee7eb9f01d',
					'https://pl.scdn.co/images/pl/default/184d797a8347a180cea3ef9d997a6241375da361',
					'https://pl.scdn.co/images/pl/default/41911b96f2d6cc29b65b38253a40459b4937109f',
					'https://pl.scdn.co/images/pl/default/b3cd2a94d49631ca9625bc82deb1d175eb3f6b1a']
		var list = data.playlists.items;
		for (i = 0; i < list.length; i++) {
	  		text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"openplaylist(&quot;"+list[i].href+"&quot;)'><img src='"+ list[i].images[0].url + "'><div class='img_description_layer2'><p class='img_description2'></p></div></div>";
		}
		for (i = 0; i < nations.length; i++) {
	  		text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"openplaylist(&quot;https://api.spotify.com/v1/playlists/"+nations[i]+"&quot;)'><img src='"+ covers[i] + "'><div class='img_description_layer2'><p class='img_description2'></p></div></div>";
		}
		document.getElementById("album-playlists2").innerHTML = text;
	}
	);
}

//New Releases tab click
function newreleases(){
	$("#genmood").css("border-bottom", "");
	$("#edipick").css("border-bottom", "");
	$("#newrel").css("border-bottom", "3px solid grey");
	//New Releases
	fetch("https://api.spotify.com/v1/browse/new-releases?limit=50", {
	  method: "GET",
	  headers: {
	    Authorization: `Bearer ${userAccessToken}`     
	  }
	})
	.then(response => response.json())
	.then( function(data){
		console.log(data);
		var text="";
		var list = data.albums.items;
		for (i = 0; i < list.length; i++) {
	  		text += "<div class='img-hover-zoom float-left mr-2 mb-3' onclick='"+"openalbum(&quot;"+list[i].href+"&quot;)'><img src='"+ list[i].images[1].url + "'><div class='img_description_layer'><p class='img_description'>"+list[i].name+
	  			"<br><br>"+list[i].artists[0].name+"</p></div></div>";
		}
		document.getElementById("album-playlists2").innerHTML = text;
	}
	);
}

//Track Play
function playsong(trackurl){
	if (trackurl=='null' || !trackurl){
		$("#popup").click();
	}
	else if (trackurl == 'stop'){					
		obj.src = '';
		$("#progressbar").css("width","0%");
	}
	else{
		obj.src = trackurl;
		var playPromise = obj.play();				
	}				
}

//Update Music Player GUI
function updateProgress(currentTime, duration){
	var prefix = "00:";
	percent = eval((currentTime/duration)*100);
	$("#progressbar").css("width",percent+"%");
	if (currentTime <10)
		$("#musictime").text("00:0"+Math.floor(currentTime));
	else
		$("#musictime").text("00:"+Math.floor(currentTime));
}

//Set Music Player audio and audio name
function setMusicPlayer(songDetails){
	var song = JSON.parse(songDetails);
	console.log(song.url);
	$('#musicname').text(song.name);
	$('#playbutton').attr('onClick', 'playsong("'+song.url+'")');
	$('#stopbutton').attr('onClick', 'playsong("stop")');
	$('#playbutton').click();
	$(obj).on("loadedmetadata", function(){
		$(obj).attr("ontimeupdate","updateProgress(this.currentTime,this.duration)");			        
    });				
}

//Listen for cache changes
window.addEventListener('storage', (event) => {
  // When local storage changes, dump the list to the console.
  console.log(event.key);
  switch(event.key){
        case 'country': getResultsCountry(localStorage.getItem('country')); break;
        case 'songDetails': setMusicPlayer(localStorage.getItem('songDetails')); break;
    }				  
});

//Click on Genres and Mood tab (Starting)
document.getElementById("edipick").click(); 