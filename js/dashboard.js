var flag='s';
var country;
var songDetails= new Object();
var userAccessToken='';
//userAccessToken = "BQA3DZaDdcIJTOjAstcyje5xTFFbe48qw028zn6vltKPyoW1Gtr-LUiNYWHihWop8YKs0VNGD2OPPJdFHPJrTd9UhrU4bTAanbot8B6w01RkOd4mw7gnO3oxqRKWGEw9WrC9d39sainxsrCfVGqgqQbgmarJRk3zW3Uriorozt9H628WDtLxmw&refresh_token=AQA4bjvfcwy9-D5_VRJ7235bOlBKUUAkdSlyOA9_gwMAUewYHix1M9gWDaUmw-YsqolN2LVjALu4mtGzD8AfFNtJMt5NZB8ZOveAWYrLE_2Va9aZkbRnCVKxElC1L09vJ_4";

localStorage.setItem('userAccessToken', userAccessToken);

//Hardcoding if no userAccessToken
var genmood_text='{"categories":{"href":"https://api.spotify.com/v1/browse/categories?offset=0&limit=20","items":[{"href":"https://api.spotify.com/v1/browse/categories/toplists","icons":[{"height":275,"url":"https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg","width":275}],"id":"toplists","name":"Top Lists"},{"href":"https://api.spotify.com/v1/browse/categories/pop","icons":[{"height":274,"url":"https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg","width":274}],"id":"pop","name":"Pop"},{"href":"https://api.spotify.com/v1/browse/categories/workout","icons":[{"height":null,"url":"https://t.scdn.co/media/links/workout-274x274.jpg","width":null}],"id":"workout","name":"Workout"},{"href":"https://api.spotify.com/v1/browse/categories/hiphop","icons":[{"height":274,"url":"https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg","width":274}],"id":"hiphop","name":"Hip-Hop"},{"href":"https://api.spotify.com/v1/browse/categories/rock","icons":[{"height":274,"url":"https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg","width":274}],"id":"rock","name":"Rock"},{"href":"https://api.spotify.com/v1/browse/categories/rnb","icons":[{"height":274,"url":"https://t.scdn.co/media/derived/r-b-274x274_fd56efa72f4f63764b011b68121581d8_0_0_274_274.jpg","width":274}],"id":"rnb","name":"R&B"},{"href":"https://api.spotify.com/v1/browse/categories/edm_dance","icons":[{"height":274,"url":"https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg","width":274}],"id":"edm_dance","name":"Electronic/Dance"},{"href":"https://api.spotify.com/v1/browse/categories/mood","icons":[{"height":274,"url":"https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg","width":274}],"id":"mood","name":"Mood"},{"href":"https://api.spotify.com/v1/browse/categories/indie_alt","icons":[{"height":null,"url":"https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg","width":null}],"id":"indie_alt","name":"Indie"},{"href":"https://api.spotify.com/v1/browse/categories/party","icons":[{"height":274,"url":"https://t.scdn.co/media/links/partyicon_274x274.jpg","width":274}],"id":"party","name":"Party"},{"href":"https://api.spotify.com/v1/browse/categories/throwback","icons":[{"height":null,"url":"https://t.scdn.co/images/448949e524284cea9aedbf32aa69d90f.jpeg","width":null}],"id":"throwback","name":"Throwback"},{"href":"https://api.spotify.com/v1/browse/categories/chill","icons":[{"height":274,"url":"https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg","width":274}],"id":"chill","name":"Chill"},{"href":"https://api.spotify.com/v1/browse/categories/thirdparty","icons":[{"height":null,"url":"https://t.scdn.co/images/b4182906bf244b4994805084c057e9ee.jpeg","width":null}],"id":"thirdparty","name":"Tastemakers"},{"href":"https://api.spotify.com/v1/browse/categories/sleep","icons":[{"height":274,"url":"https://t.scdn.co/media/derived/sleep-274x274_0d4f836af8fab7bf31526968073e671c_0_0_274_274.jpg","width":274}],"id":"sleep","name":"Sleep"},{"href":"https://api.spotify.com/v1/browse/categories/wellness","icons":[{"height":null,"url":"https://t.scdn.co/images/2adf91e7179a4e098834d630c74824b1.jpeg","width":null}],"id":"wellness","name":"Wellness"},{"href":"https://api.spotify.com/v1/browse/categories/sessions","icons":[{"height":null,"url":"https://t.scdn.co/images/986a6f23-b61b-43c5-85dd-c66cc66e0f40.jpg","width":null}],"id":"sessions","name":"Spotify Singles"},{"href":"https://api.spotify.com/v1/browse/categories/classical","icons":[{"height":274,"url":"https://t.scdn.co/media/derived/classical-274x274_abf78251ff3d90d2ceaf029253ca7cb4_0_0_274_274.jpg","width":274}],"id":"classical","name":"Classical"},{"href":"https://api.spotify.com/v1/browse/categories/blackhistorymonth","icons":[{"height":null,"url":"https://t.scdn.co/images/9b0fe809ec654ed9b3b8257e31739d8f.jpeg","width":null}],"id":"blackhistorymonth","name":"Black history is now"},{"href":"https://api.spotify.com/v1/browse/categories/pride","icons":[{"height":null,"url":"https://t.scdn.co/images/90f4c163-46f6-4cda-bd84-e78ff90d4959.jpg","width":null}],"id":"pride","name":"Pride"},{"href":"https://api.spotify.com/v1/browse/categories/romance","icons":[{"height":274,"url":"https://t.scdn.co/media/derived/romance-274x274_8100794c94847b6d27858bed6fa4d91b_0_0_274_274.jpg","width":274}],"id":"romance","name":"Romance"}],"limit":20,"next":"https://api.spotify.com/v1/browse/categories?offset=20&limit=20","offset":0,"previous":null,"total":43}}';
var edpick_text='{"message":"Editor\'s picks","playlists":{"href":"https://api.spotify.com/v1/browse/featured-playlists?timestamp=2020-03-12T19%3A36%3A03&offset=0&limit=50","items":[{"collaborative":false,"description":"Listen to all the tracks you\'ve been missing. Cover: Lady Gaga","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DX0s5kDXi1oC5"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX0s5kDXi1oC5","id":"37i9dQZF1DX0s5kDXi1oC5","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f00000002a5bb8355ef0777f619df073b","width":null}],"name":"Hit Rewind","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU4NDA0MTc1MywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX0s5kDXi1oC5/tracks","total":75},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DX0s5kDXi1oC5"},{"collaborative":false,"description":"An uplifting yet tasteful dinner playlist with a guaranteed feel good vibe.","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DXbm6HfkbMtFZ"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DXbm6HfkbMtFZ","id":"37i9dQZF1DXbm6HfkbMtFZ","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f000000029d43d2f6920b35c967483d96","width":null}],"name":"Feel Good Dinner","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU4NDA0MTcxNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DXbm6HfkbMtFZ/tracks","total":115},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DXbm6HfkbMtFZ"},{"collaborative":false,"description":"The perfect playlist to just sit back and chill out with.","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DXci7j0DJQgGp"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DXci7j0DJQgGp","id":"37i9dQZF1DXci7j0DJQgGp","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f0000000253b3ac56e2db1677806f9c99","width":null}],"name":"Hanging Out and Relaxing","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU4NDA0MTc1MywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DXci7j0DJQgGp/tracks","total":108},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DXci7j0DJQgGp"},{"collaborative":false,"description":"Turn up with the biggest party tracks of the \'90s and \'00s.","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DX8ky12eWIvcW"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX8ky12eWIvcW","id":"37i9dQZF1DX8ky12eWIvcW","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f0000000270360cd384e89a266c8480a1","width":null}],"name":"Throwback Jams","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU4NDA0MTczNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX8ky12eWIvcW/tracks","total":93},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DX8ky12eWIvcW"},{"collaborative":false,"description":"Relax and indulge with beautiful piano pieces","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO","id":"37i9dQZF1DX4sWSpwq3LiO","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6","width":null}],"name":"Peaceful Piano","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU4Mzg0NTg5NSwwMDAwMDBiODAwMDAwMTcwYzQ5MjZlMjMwMDAwMDE2ZDE1NTk1OTFk","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO/tracks","total":268},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DX4sWSpwq3LiO"},{"collaborative":false,"description":"Elevate your evening and unwind with the lush sounds of these ethereal tracks.","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DWZ0OzPeadl0h"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DWZ0OzPeadl0h","id":"37i9dQZF1DWZ0OzPeadl0h","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f000000024073f3e2cc59d30900cd157d","width":null}],"name":"Evening Chill","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU3ODUxOTQ4MSwwMDAwMDA1MjAwMDAwMTZmODcxN2NhZDIwMDAwMDE2ZDE1MjI4MzFh","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DWZ0OzPeadl0h/tracks","total":92},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DWZ0OzPeadl0h"},{"collaborative":false,"description":"Relax to these acoustic soul songs. Cover: Sinead Harnett.","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DX5lDysu4GbKR"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX5lDysu4GbKR","id":"37i9dQZF1DX5lDysu4GbKR","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f0000000274a2e5a33072ba9bb3d80f78","width":null}],"name":"Acoustic Soul","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU4MjIyNjcwOCwwMDAwMDA0MDAwMDAwMTcwNjQwZjk4MTIwMDAwMDE2ZWRhYWY1NjA0","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX5lDysu4GbKR/tracks","total":65},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DX5lDysu4GbKR"},{"collaborative":false,"description":"Lane 8 takes over Chill Tracks celebrating his album \'Brightest Lights\'","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DX6VdMW310YC7"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX6VdMW310YC7","id":"37i9dQZF1DX6VdMW310YC7","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f00000002a9fe462e36ddd01c0dc9ac19","width":null}],"name":"Chill Tracks","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU3ODYzMjQ2MCwwMDAwMDEzMDAwMDAwMTZmOGRkM2I3OWYwMDAwMDE2ZjhkNTk5MmVi","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX6VdMW310YC7/tracks","total":60},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DX6VdMW310YC7"},{"collaborative":false,"description":"The great masterpieces of the genre.","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DX6xOPeSOGone"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX6xOPeSOGone","id":"37i9dQZF1DX6xOPeSOGone","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f000000028f7cea2939220d6a326924fa","width":null}],"name":"Soft Rock","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU4NDA0MTcyNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX6xOPeSOGone/tracks","total":100},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DX6xOPeSOGone"},{"collaborative":false,"description":"Embrace your secret favorites.","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DX4pUKG1kS0Ac"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX4pUKG1kS0Ac","id":"37i9dQZF1DX4pUKG1kS0Ac","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f000000024a2afca194d4819c57201bc3","width":null}],"name":"Guilty Pleasures","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU4NDA0MTc1MiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DX4pUKG1kS0Ac/tracks","total":151},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DX4pUKG1kS0Ac"},{"collaborative":false,"description":"Bad Bunny is on top of the Hottest 50!","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M","id":"37i9dQZF1DXcBWIGoYBM5M","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f00000002b27dd9f4a8c5d2ef0125f942","width":null}],"name":"Today\'s Top Hits","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU4Mzk1MjEyNiwwMDAwMDNkMTAwMDAwMTcwY2FlNzYwNTEwMDAwMDE3MGFkZGZhMWNi","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks","total":50},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DXcBWIGoYBM5M"},{"collaborative":false,"description":"Listen to easy songs from your favorite artists! Cover: Sam Smith","external_urls":{"spotify":"https://open.spotify.com/playlist/37i9dQZF1DWTwnEm1IYyoj"},"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DWTwnEm1IYyoj","id":"37i9dQZF1DWTwnEm1IYyoj","images":[{"height":null,"url":"https://i.scdn.co/image/ab67706f000000029faf94f891c36e9af9590e42","width":null}],"name":"Soft Pop Hits","owner":{"display_name":"Spotify","external_urls":{"spotify":"https://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"primary_color":null,"public":null,"snapshot_id":"MTU4MTA1OTg5MywwMDAwMDA2NjAwMDAwMTcwMWU4MzZhYTAwMDAwMDE2ZDE1NTUxNjRm","tracks":{"href":"https://api.spotify.com/v1/playlists/37i9dQZF1DWTwnEm1IYyoj/tracks","total":231},"type":"playlist","uri":"spotify:playlist:37i9dQZF1DWTwnEm1IYyoj"}],"limit":50,"next":null,"offset":0,"previous":null,"total":12}}';
var newrel_text='{"albums":{"href":"https://api.spotify.com/v1/browse/new-releases?offset=0&limit=50","items":[{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/2hlmm7s2ICUX0LVIhVFlZQ"},"href":"https://api.spotify.com/v1/artists/2hlmm7s2ICUX0LVIhVFlZQ","id":"2hlmm7s2ICUX0LVIhVFlZQ","name":"Gunna","type":"artist","uri":"spotify:artist:2hlmm7s2ICUX0LVIhVFlZQ"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/5v6VnHvsnu2GnmQmZElrP8"},"href":"https://api.spotify.com/v1/albums/5v6VnHvsnu2GnmQmZElrP8","id":"5v6VnHvsnu2GnmQmZElrP8","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273e7842a17a7ed6c53688adbfd","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02e7842a17a7ed6c53688adbfd","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851e7842a17a7ed6c53688adbfd","width":64}],"name":"SKYBOX","release_date":"2020-03-06","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:5v6VnHvsnu2GnmQmZElrP8"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz"},"href":"https://api.spotify.com/v1/artists/4O15NlyKLIASxsJ0PrXPfz","id":"4O15NlyKLIASxsJ0PrXPfz","name":"Lil Uzi Vert","type":"artist","uri":"spotify:artist:4O15NlyKLIASxsJ0PrXPfz"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/7IyoGB8J31fvQDwGtHAq9m"},"href":"https://api.spotify.com/v1/albums/7IyoGB8J31fvQDwGtHAq9m","id":"7IyoGB8J31fvQDwGtHAq9m","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273d9beb0fa3e299d4cabcd459c","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02d9beb0fa3e299d4cabcd459c","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851d9beb0fa3e299d4cabcd459c","width":64}],"name":"Eternal Atake","release_date":"2020-03-06","release_date_precision":"day","total_tracks":18,"type":"album","uri":"spotify:album:7IyoGB8J31fvQDwGtHAq9m"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0duLKMlcwhyZgqu8zSSjBp"},"href":"https://api.spotify.com/v1/artists/0duLKMlcwhyZgqu8zSSjBp","id":"0duLKMlcwhyZgqu8zSSjBp","name":"Alaina Castillo","type":"artist","uri":"spotify:artist:0duLKMlcwhyZgqu8zSSjBp"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/5kommCwJMaXFKYnfS6yB5A"},"href":"https://api.spotify.com/v1/albums/5kommCwJMaXFKYnfS6yB5A","id":"5kommCwJMaXFKYnfS6yB5A","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2736af6ff696f7be0fb0eff5420","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e026af6ff696f7be0fb0eff5420","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048516af6ff696f7be0fb0eff5420","width":64}],"name":"Spotify Singles","release_date":"2020-03-11","release_date_precision":"day","total_tracks":2,"type":"album","uri":"spotify:album:5kommCwJMaXFKYnfS6yB5A"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"},"href":"https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X","id":"4q3ewBCX7sLwd24euuV69X","name":"Bad Bunny","type":"artist","uri":"spotify:artist:4q3ewBCX7sLwd24euuV69X"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/5lJqux7orBlA1QzyiBGti1"},"href":"https://api.spotify.com/v1/albums/5lJqux7orBlA1QzyiBGti1","id":"5lJqux7orBlA1QzyiBGti1","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02548f7ec52da7313de0c5e4a0","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851548f7ec52da7313de0c5e4a0","width":64}],"name":"YHLQMDLG","release_date":"2020-02-28","release_date_precision":"day","total_tracks":20,"type":"album","uri":"spotify:album:5lJqux7orBlA1QzyiBGti1"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5JZ7CnR6gTvEMKX4g70Amv"},"href":"https://api.spotify.com/v1/artists/5JZ7CnR6gTvEMKX4g70Amv","id":"5JZ7CnR6gTvEMKX4g70Amv","name":"Lauv","type":"artist","uri":"spotify:artist:5JZ7CnR6gTvEMKX4g70Amv"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/6EgJXcGqaUvgZIF9bqPXfP"},"href":"https://api.spotify.com/v1/albums/6EgJXcGqaUvgZIF9bqPXfP","id":"6EgJXcGqaUvgZIF9bqPXfP","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27321185b25d26c674553a0f807","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0221185b25d26c674553a0f807","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485121185b25d26c674553a0f807","width":64}],"name":"~how i\'m feeling~","release_date":"2020-03-06","release_date_precision":"day","total_tracks":21,"type":"album","uri":"spotify:album:6EgJXcGqaUvgZIF9bqPXfP"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK"},"href":"https://api.spotify.com/v1/artists/181bsRPaVXVlUKXrxwZfHK","id":"181bsRPaVXVlUKXrxwZfHK","name":"Megan Thee Stallion","type":"artist","uri":"spotify:artist:181bsRPaVXVlUKXrxwZfHK"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/6Lo6ylJg4qbFfxicPEOzMI"},"href":"https://api.spotify.com/v1/albums/6Lo6ylJg4qbFfxicPEOzMI","id":"6Lo6ylJg4qbFfxicPEOzMI","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27320fbc17fcb9376bc76a1b510","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0220fbc17fcb9376bc76a1b510","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485120fbc17fcb9376bc76a1b510","width":64}],"name":"Suga","release_date":"2020-03-06","release_date_precision":"day","total_tracks":9,"type":"album","uri":"spotify:album:6Lo6ylJg4qbFfxicPEOzMI"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6jJ0s89eD6GaHleKKya26X"},"href":"https://api.spotify.com/v1/artists/6jJ0s89eD6GaHleKKya26X","id":"6jJ0s89eD6GaHleKKya26X","name":"Katy Perry","type":"artist","uri":"spotify:artist:6jJ0s89eD6GaHleKKya26X"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/0Gubs5k8ay34m9a0yiliRa"},"href":"https://api.spotify.com/v1/albums/0Gubs5k8ay34m9a0yiliRa","id":"0Gubs5k8ay34m9a0yiliRa","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273ff569cf0c02071d352847a47","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02ff569cf0c02071d352847a47","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851ff569cf0c02071d352847a47","width":64}],"name":"Never Worn White","release_date":"2020-03-05","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:0Gubs5k8ay34m9a0yiliRa"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/25IG9fa7cbdmCIy3OnuH57"},"href":"https://api.spotify.com/v1/artists/25IG9fa7cbdmCIy3OnuH57","id":"25IG9fa7cbdmCIy3OnuH57","name":"Dixie Chicks","type":"artist","uri":"spotify:artist:25IG9fa7cbdmCIy3OnuH57"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/0duNimI62kUS00BEgZ1gKV"},"href":"https://api.spotify.com/v1/albums/0duNimI62kUS00BEgZ1gKV","id":"0duNimI62kUS00BEgZ1gKV","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2732c5b6344a576ef422fe5986e","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e022c5b6344a576ef422fe5986e","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048512c5b6344a576ef422fe5986e","width":64}],"name":"Gaslighter","release_date":"2020-03-04","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:0duNimI62kUS00BEgZ1gKV"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/2hlmm7s2ICUX0LVIhVFlZQ"},"href":"https://api.spotify.com/v1/artists/2hlmm7s2ICUX0LVIhVFlZQ","id":"2hlmm7s2ICUX0LVIhVFlZQ","name":"Gunna","type":"artist","uri":"spotify:artist:2hlmm7s2ICUX0LVIhVFlZQ"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/0TI2yNo9N7VIZY6pdc2w7R"},"href":"https://api.spotify.com/v1/albums/0TI2yNo9N7VIZY6pdc2w7R","id":"0TI2yNo9N7VIZY6pdc2w7R","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273bf38fe3fb0e6747e27c5148a","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02bf38fe3fb0e6747e27c5148a","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851bf38fe3fb0e6747e27c5148a","width":64}],"name":"SKYBOX","release_date":"2020-03-05","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:0TI2yNo9N7VIZY6pdc2w7R"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6S2OmqARrzebs0tKUEyXyp"},"href":"https://api.spotify.com/v1/artists/6S2OmqARrzebs0tKUEyXyp","id":"6S2OmqARrzebs0tKUEyXyp","name":"Demi Lovato","type":"artist","uri":"spotify:artist:6S2OmqARrzebs0tKUEyXyp"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3VKVZ7PvA64NtVJChPGDaH"},"href":"https://api.spotify.com/v1/albums/3VKVZ7PvA64NtVJChPGDaH","id":"3VKVZ7PvA64NtVJChPGDaH","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27381f82d9c1d6278a167aae855","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0281f82d9c1d6278a167aae855","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485181f82d9c1d6278a167aae855","width":64}],"name":"I Love Me","release_date":"2020-03-06","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:3VKVZ7PvA64NtVJChPGDaH"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5ZS223C6JyBfXasXxrRqOk"},"href":"https://api.spotify.com/v1/artists/5ZS223C6JyBfXasXxrRqOk","id":"5ZS223C6JyBfXasXxrRqOk","name":"Jhené Aiko","type":"artist","uri":"spotify:artist:5ZS223C6JyBfXasXxrRqOk"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/38VJmvRNp32qPiQTJkWtJB"},"href":"https://api.spotify.com/v1/albums/38VJmvRNp32qPiQTJkWtJB","id":"38VJmvRNp32qPiQTJkWtJB","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2739d3a085fd82d257cbf943e51","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e029d3a085fd82d257cbf943e51","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048519d3a085fd82d257cbf943e51","width":64}],"name":"Chilombo","release_date":"2020-03-06","release_date_precision":"day","total_tracks":20,"type":"album","uri":"spotify:album:38VJmvRNp32qPiQTJkWtJB"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0duLKMlcwhyZgqu8zSSjBp"},"href":"https://api.spotify.com/v1/artists/0duLKMlcwhyZgqu8zSSjBp","id":"0duLKMlcwhyZgqu8zSSjBp","name":"Alaina Castillo","type":"artist","uri":"spotify:artist:0duLKMlcwhyZgqu8zSSjBp"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3CjMRBcsuF2690cZwLubHD"},"href":"https://api.spotify.com/v1/albums/3CjMRBcsuF2690cZwLubHD","id":"3CjMRBcsuF2690cZwLubHD","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27319a848e66eb3d45cbbccfdfa","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0219a848e66eb3d45cbbccfdfa","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485119a848e66eb3d45cbbccfdfa","width":64}],"name":"ocean waves","release_date":"2020-03-06","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:3CjMRBcsuF2690cZwLubHD"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4GvEc3ANtPPjt1ZJllr5Zl"},"href":"https://api.spotify.com/v1/artists/4GvEc3ANtPPjt1ZJllr5Zl","id":"4GvEc3ANtPPjt1ZJllr5Zl","name":"Bazzi","type":"artist","uri":"spotify:artist:4GvEc3ANtPPjt1ZJllr5Zl"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/4UoEi8sYhfBkFEkvZDfb74"},"href":"https://api.spotify.com/v1/albums/4UoEi8sYhfBkFEkvZDfb74","id":"4UoEi8sYhfBkFEkvZDfb74","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27337d909d7a469c9223e512135","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0237d909d7a469c9223e512135","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485137d909d7a469c9223e512135","width":64}],"name":"Young & Alive","release_date":"2020-03-05","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:4UoEi8sYhfBkFEkvZDfb74"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7uaIm6Pw7xplS8Dy06V6pT"},"href":"https://api.spotify.com/v1/artists/7uaIm6Pw7xplS8Dy06V6pT","id":"7uaIm6Pw7xplS8Dy06V6pT","name":"Trevor Daniel","type":"artist","uri":"spotify:artist:7uaIm6Pw7xplS8Dy06V6pT"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/1UYUdHAO3d6iA71X4sj4ak"},"href":"https://api.spotify.com/v1/albums/1UYUdHAO3d6iA71X4sj4ak","id":"1UYUdHAO3d6iA71X4sj4ak","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273e3f29c865ddece48066b0ba0","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02e3f29c865ddece48066b0ba0","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851e3f29c865ddece48066b0ba0","width":64}],"name":"Past Life","release_date":"2020-03-06","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:1UYUdHAO3d6iA71X4sj4ak"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0KPX4Ucy9dk82uj4GpKesn"},"href":"https://api.spotify.com/v1/artists/0KPX4Ucy9dk82uj4GpKesn","id":"0KPX4Ucy9dk82uj4GpKesn","name":"Dalex","type":"artist","uri":"spotify:artist:0KPX4Ucy9dk82uj4GpKesn"},{"external_urls":{"spotify":"https://open.spotify.com/artist/14zUHaJZo1mnYtn6IBRaRP"},"href":"https://api.spotify.com/v1/artists/14zUHaJZo1mnYtn6IBRaRP","id":"14zUHaJZo1mnYtn6IBRaRP","name":"Justin Quiles","type":"artist","uri":"spotify:artist:14zUHaJZo1mnYtn6IBRaRP"},{"external_urls":{"spotify":"https://open.spotify.com/artist/77ziqFxp5gaInVrF2lj4ht"},"href":"https://api.spotify.com/v1/artists/77ziqFxp5gaInVrF2lj4ht","id":"77ziqFxp5gaInVrF2lj4ht","name":"Sech","type":"artist","uri":"spotify:artist:77ziqFxp5gaInVrF2lj4ht"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3GCKwiuB7D7UPao5Mfl0Pp"},"href":"https://api.spotify.com/v1/albums/3GCKwiuB7D7UPao5Mfl0Pp","id":"3GCKwiuB7D7UPao5Mfl0Pp","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27312d29a26d375ab36b4a1945d","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0212d29a26d375ab36b4a1945d","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485112d29a26d375ab36b4a1945d","width":64}],"name":"Perfume","release_date":"2020-03-06","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:3GCKwiuB7D7UPao5Mfl0Pp"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5IH6FPUwQTxPSXurCrcIov"},"href":"https://api.spotify.com/v1/artists/5IH6FPUwQTxPSXurCrcIov","id":"5IH6FPUwQTxPSXurCrcIov","name":"Alec Benjamin","type":"artist","uri":"spotify:artist:5IH6FPUwQTxPSXurCrcIov"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3xHrlh93xHHP1c5zYiaUad"},"href":"https://api.spotify.com/v1/albums/3xHrlh93xHHP1c5zYiaUad","id":"3xHrlh93xHHP1c5zYiaUad","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273e31adf719ea828b44ac5f986","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02e31adf719ea828b44ac5f986","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851e31adf719ea828b44ac5f986","width":64}],"name":"The Book of You & I","release_date":"2020-03-05","release_date_precision":"day","total_tracks":4,"type":"album","uri":"spotify:album:3xHrlh93xHHP1c5zYiaUad"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1pPmIToKXyGdsCF6LmqLmI"},"href":"https://api.spotify.com/v1/artists/1pPmIToKXyGdsCF6LmqLmI","id":"1pPmIToKXyGdsCF6LmqLmI","name":"Rich The Kid","type":"artist","uri":"spotify:artist:1pPmIToKXyGdsCF6LmqLmI"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/66LN7OzRQbNLCDo1Y6PlTC"},"href":"https://api.spotify.com/v1/albums/66LN7OzRQbNLCDo1Y6PlTC","id":"66LN7OzRQbNLCDo1Y6PlTC","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27374e664ac6104805e0d2f4e3e","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0274e664ac6104805e0d2f4e3e","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485174e664ac6104805e0d2f4e3e","width":64}],"name":"Red","release_date":"2020-03-06","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:66LN7OzRQbNLCDo1Y6PlTC"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/78SHxLdtysAXgywQ4vE0Oa"},"href":"https://api.spotify.com/v1/artists/78SHxLdtysAXgywQ4vE0Oa","id":"78SHxLdtysAXgywQ4vE0Oa","name":"Bush","type":"artist","uri":"spotify:artist:78SHxLdtysAXgywQ4vE0Oa"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/2Kvbw8Jz6jTr6rqCsNottI"},"href":"https://api.spotify.com/v1/albums/2Kvbw8Jz6jTr6rqCsNottI","id":"2Kvbw8Jz6jTr6rqCsNottI","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2732a84c8e6c8525efff01efbb6","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e022a84c8e6c8525efff01efbb6","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048512a84c8e6c8525efff01efbb6","width":64}],"name":"Flowers On A Grave","release_date":"2020-03-04","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:2Kvbw8Jz6jTr6rqCsNottI"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5vMAKlvvMNSRQRYCAvpG6S"},"href":"https://api.spotify.com/v1/artists/5vMAKlvvMNSRQRYCAvpG6S","id":"5vMAKlvvMNSRQRYCAvpG6S","name":"Brandy Clark","type":"artist","uri":"spotify:artist:5vMAKlvvMNSRQRYCAvpG6S"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/027y46STDxTFM35diEeoxy"},"href":"https://api.spotify.com/v1/albums/027y46STDxTFM35diEeoxy","id":"027y46STDxTFM35diEeoxy","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273bedfcbdd30a673719bba5415","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02bedfcbdd30a673719bba5415","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851bedfcbdd30a673719bba5415","width":64}],"name":"Your Life is a Record","release_date":"2020-03-06","release_date_precision":"day","total_tracks":11,"type":"album","uri":"spotify:album:027y46STDxTFM35diEeoxy"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7d3WFRME3vBY2cgoP38RDo"},"href":"https://api.spotify.com/v1/artists/7d3WFRME3vBY2cgoP38RDo","id":"7d3WFRME3vBY2cgoP38RDo","name":"Lil Skies","type":"artist","uri":"spotify:artist:7d3WFRME3vBY2cgoP38RDo"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/2j4sCqWt6NjUObh6kXuACB"},"href":"https://api.spotify.com/v1/albums/2j4sCqWt6NjUObh6kXuACB","id":"2j4sCqWt6NjUObh6kXuACB","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273abb343de6562db214f432c24","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02abb343de6562db214f432c24","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851abb343de6562db214f432c24","width":64}],"name":"Havin My Way (feat. Lil Durk)","release_date":"2020-03-04","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:2j4sCqWt6NjUObh6kXuACB"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5IbEL2xjRtKsunfmsahLuO"},"href":"https://api.spotify.com/v1/artists/5IbEL2xjRtKsunfmsahLuO","id":"5IbEL2xjRtKsunfmsahLuO","name":"$NOT","type":"artist","uri":"spotify:artist:5IbEL2xjRtKsunfmsahLuO"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3T5xpcLoOVSbHSibYi2D1z"},"href":"https://api.spotify.com/v1/albums/3T5xpcLoOVSbHSibYi2D1z","id":"3T5xpcLoOVSbHSibYi2D1z","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273120ecc30d1dd60be258699c0","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02120ecc30d1dd60be258699c0","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851120ecc30d1dd60be258699c0","width":64}],"name":"- TRAGEDY +","release_date":"2020-03-06","release_date_precision":"day","total_tracks":12,"type":"album","uri":"spotify:album:3T5xpcLoOVSbHSibYi2D1z"},{"album_type":"compilation","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4FJPplt1JOVw8Q7NiwFmLv"},"href":"https://api.spotify.com/v1/artists/4FJPplt1JOVw8Q7NiwFmLv","id":"4FJPplt1JOVw8Q7NiwFmLv","name":"Friend Within","type":"artist","uri":"spotify:artist:4FJPplt1JOVw8Q7NiwFmLv"},{"external_urls":{"spotify":"https://open.spotify.com/artist/7eYXtOjJGhrM16cK2hRmnR"},"href":"https://api.spotify.com/v1/artists/7eYXtOjJGhrM16cK2hRmnR","id":"7eYXtOjJGhrM16cK2hRmnR","name":"Leftwing : Kody","type":"artist","uri":"spotify:artist:7eYXtOjJGhrM16cK2hRmnR"},{"external_urls":{"spotify":"https://open.spotify.com/artist/3Y7jEjvZAosFRghJl62VNd"},"href":"https://api.spotify.com/v1/artists/3Y7jEjvZAosFRghJl62VNd","id":"3Y7jEjvZAosFRghJl62VNd","name":"Siege","type":"artist","uri":"spotify:artist:3Y7jEjvZAosFRghJl62VNd"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/6uPQVQ1nXRO5AYGG5BRBDn"},"href":"https://api.spotify.com/v1/albums/6uPQVQ1nXRO5AYGG5BRBDn","id":"6uPQVQ1nXRO5AYGG5BRBDn","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273a237a7fcab904ef1c0b68998","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02a237a7fcab904ef1c0b68998","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851a237a7fcab904ef1c0b68998","width":64}],"name":"Toolroom Miami 2020 (DJ Mix)","release_date":"2020-03-06","release_date_precision":"day","total_tracks":67,"type":"album","uri":"spotify:album:6uPQVQ1nXRO5AYGG5BRBDn"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6oFs3qk4VepIVFdoD4jmsy"},"href":"https://api.spotify.com/v1/artists/6oFs3qk4VepIVFdoD4jmsy","id":"6oFs3qk4VepIVFdoD4jmsy","name":"PVRIS","type":"artist","uri":"spotify:artist:6oFs3qk4VepIVFdoD4jmsy"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/7pyv1fWhBIstEJVTyuMZK5"},"href":"https://api.spotify.com/v1/albums/7pyv1fWhBIstEJVTyuMZK5","id":"7pyv1fWhBIstEJVTyuMZK5","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2731b29732357677fcff19ad6a4","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e021b29732357677fcff19ad6a4","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048511b29732357677fcff19ad6a4","width":64}],"name":"Dead Weight","release_date":"2020-03-04","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:7pyv1fWhBIstEJVTyuMZK5"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/2LJxr7Pt3JnP60eLxwbDOu"},"href":"https://api.spotify.com/v1/artists/2LJxr7Pt3JnP60eLxwbDOu","id":"2LJxr7Pt3JnP60eLxwbDOu","name":"Mandy Moore","type":"artist","uri":"spotify:artist:2LJxr7Pt3JnP60eLxwbDOu"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/0XYdiMZgEZ8HxWOJPk6aVx"},"href":"https://api.spotify.com/v1/albums/0XYdiMZgEZ8HxWOJPk6aVx","id":"0XYdiMZgEZ8HxWOJPk6aVx","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273ec3512ab81f40ea396642a85","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02ec3512ab81f40ea396642a85","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851ec3512ab81f40ea396642a85","width":64}],"name":"Silver Landings","release_date":"2020-03-06","release_date_precision":"day","total_tracks":10,"type":"album","uri":"spotify:album:0XYdiMZgEZ8HxWOJPk6aVx"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1Tsag5J854qxeOo2apszug"},"href":"https://api.spotify.com/v1/artists/1Tsag5J854qxeOo2apszug","id":"1Tsag5J854qxeOo2apszug","name":"Silverstein","type":"artist","uri":"spotify:artist:1Tsag5J854qxeOo2apszug"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/4orRroMtRrVGnlpheJbuap"},"href":"https://api.spotify.com/v1/albums/4orRroMtRrVGnlpheJbuap","id":"4orRroMtRrVGnlpheJbuap","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273ee647f9033bf7dfb1784f640","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02ee647f9033bf7dfb1784f640","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851ee647f9033bf7dfb1784f640","width":64}],"name":"A Beautiful Place To Drown","release_date":"2020-03-06","release_date_precision":"day","total_tracks":12,"type":"album","uri":"spotify:album:4orRroMtRrVGnlpheJbuap"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6Tyzp9KzpiZ04DABQoedps"},"href":"https://api.spotify.com/v1/artists/6Tyzp9KzpiZ04DABQoedps","id":"6Tyzp9KzpiZ04DABQoedps","name":"Little Dragon","type":"artist","uri":"spotify:artist:6Tyzp9KzpiZ04DABQoedps"},{"external_urls":{"spotify":"https://open.spotify.com/artist/1U1el3k54VvEUzo3ybLPlM"},"href":"https://api.spotify.com/v1/artists/1U1el3k54VvEUzo3ybLPlM","id":"1U1el3k54VvEUzo3ybLPlM","name":"Kali Uchis","type":"artist","uri":"spotify:artist:1U1el3k54VvEUzo3ybLPlM"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/5wTdvOpWCOokNlDRQDyLSm"},"href":"https://api.spotify.com/v1/albums/5wTdvOpWCOokNlDRQDyLSm","id":"5wTdvOpWCOokNlDRQDyLSm","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273541e78f99d65fd16899447c7","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02541e78f99d65fd16899447c7","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851541e78f99d65fd16899447c7","width":64}],"name":"Are You Feeling Sad?","release_date":"2020-03-04","release_date_precision":"day","total_tracks":2,"type":"album","uri":"spotify:album:5wTdvOpWCOokNlDRQDyLSm"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6nfN5B7Jmi853SHa9106Hz"},"href":"https://api.spotify.com/v1/artists/6nfN5B7Jmi853SHa9106Hz","id":"6nfN5B7Jmi853SHa9106Hz","name":"Mickey Guyton","type":"artist","uri":"spotify:artist:6nfN5B7Jmi853SHa9106Hz"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/4iwbkZsX1YmV0KiDDg5UiZ"},"href":"https://api.spotify.com/v1/albums/4iwbkZsX1YmV0KiDDg5UiZ","id":"4iwbkZsX1YmV0KiDDg5UiZ","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27361c51539f98502d968d56655","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0261c51539f98502d968d56655","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485161c51539f98502d968d56655","width":64}],"name":"What Are You Gonna Tell Her?","release_date":"2020-03-06","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:4iwbkZsX1YmV0KiDDg5UiZ"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5Pb27ujIyYb33zBqVysBkj"},"href":"https://api.spotify.com/v1/artists/5Pb27ujIyYb33zBqVysBkj","id":"5Pb27ujIyYb33zBqVysBkj","name":"RÜFÜS DU SOL","type":"artist","uri":"spotify:artist:5Pb27ujIyYb33zBqVysBkj"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/5OcHrujEkMm1x4FSihxTgv"},"href":"https://api.spotify.com/v1/albums/5OcHrujEkMm1x4FSihxTgv","id":"5OcHrujEkMm1x4FSihxTgv","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273ed94999a9d1d5882fe463c93","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02ed94999a9d1d5882fe463c93","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851ed94999a9d1d5882fe463c93","width":64}],"name":"Live from Joshua Tree","release_date":"2020-03-06","release_date_precision":"day","total_tracks":8,"type":"album","uri":"spotify:album:5OcHrujEkMm1x4FSihxTgv"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7r2oyrNc0YjSC7hZL87V0Y"},"href":"https://api.spotify.com/v1/artists/7r2oyrNc0YjSC7hZL87V0Y","id":"7r2oyrNc0YjSC7hZL87V0Y","name":"Ro James","type":"artist","uri":"spotify:artist:7r2oyrNc0YjSC7hZL87V0Y"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/7teJUDVbt9cUp14HTwpts5"},"href":"https://api.spotify.com/v1/albums/7teJUDVbt9cUp14HTwpts5","id":"7teJUDVbt9cUp14HTwpts5","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2731dd5ff659c6a88643af729d3","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e021dd5ff659c6a88643af729d3","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048511dd5ff659c6a88643af729d3","width":64}],"name":"Touchy Feely","release_date":"2020-03-06","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:7teJUDVbt9cUp14HTwpts5"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/2VdDGrsKkzCfR9AG6w5O92"},"href":"https://api.spotify.com/v1/artists/2VdDGrsKkzCfR9AG6w5O92","id":"2VdDGrsKkzCfR9AG6w5O92","name":"Blacc Zacc","type":"artist","uri":"spotify:artist:2VdDGrsKkzCfR9AG6w5O92"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/1Oe0gGYoVQReXAP79yOxtQ"},"href":"https://api.spotify.com/v1/albums/1Oe0gGYoVQReXAP79yOxtQ","id":"1Oe0gGYoVQReXAP79yOxtQ","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273a3ca4bc6d1631b9c18b01a51","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02a3ca4bc6d1631b9c18b01a51","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851a3ca4bc6d1631b9c18b01a51","width":64}],"name":"Carolina Narco","release_date":"2020-03-06","release_date_precision":"day","total_tracks":11,"type":"album","uri":"spotify:album:1Oe0gGYoVQReXAP79yOxtQ"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5YZ5AExR68U3ZblH6HcO6B"},"href":"https://api.spotify.com/v1/artists/5YZ5AExR68U3ZblH6HcO6B","id":"5YZ5AExR68U3ZblH6HcO6B","name":"Leven Kali","type":"artist","uri":"spotify:artist:5YZ5AExR68U3ZblH6HcO6B"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/22OOtGfHLgDr9MdMmgshez"},"href":"https://api.spotify.com/v1/albums/22OOtGfHLgDr9MdMmgshez","id":"22OOtGfHLgDr9MdMmgshez","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273d82222153386efdc9bf3a7cd","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02d82222153386efdc9bf3a7cd","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851d82222153386efdc9bf3a7cd","width":64}],"name":"12345 (Get Real)","release_date":"2020-03-06","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:22OOtGfHLgDr9MdMmgshez"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1l9d7B8W0IHy3LqWsxP2SH"},"href":"https://api.spotify.com/v1/artists/1l9d7B8W0IHy3LqWsxP2SH","id":"1l9d7B8W0IHy3LqWsxP2SH","name":"Phantogram","type":"artist","uri":"spotify:artist:1l9d7B8W0IHy3LqWsxP2SH"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/7nm7uCqJQIoD8Er5kIDKqc"},"href":"https://api.spotify.com/v1/albums/7nm7uCqJQIoD8Er5kIDKqc","id":"7nm7uCqJQIoD8Er5kIDKqc","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2731d920c694d4c6e3c9db68630","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e021d920c694d4c6e3c9db68630","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048511d920c694d4c6e3c9db68630","width":64}],"name":"Ceremony","release_date":"2020-03-06","release_date_precision":"day","total_tracks":11,"type":"album","uri":"spotify:album:7nm7uCqJQIoD8Er5kIDKqc"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/62vbsDRAq0qHdezaCOzB0T"},"href":"https://api.spotify.com/v1/artists/62vbsDRAq0qHdezaCOzB0T","id":"62vbsDRAq0qHdezaCOzB0T","name":"Medasin","type":"artist","uri":"spotify:artist:62vbsDRAq0qHdezaCOzB0T"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3L7pWKpDt0YFxACcY0CbLR"},"href":"https://api.spotify.com/v1/albums/3L7pWKpDt0YFxACcY0CbLR","id":"3L7pWKpDt0YFxACcY0CbLR","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27343a2074d6aae7987416ff087","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0243a2074d6aae7987416ff087","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485143a2074d6aae7987416ff087","width":64}],"name":"RIPPLS","release_date":"2020-03-06","release_date_precision":"day","total_tracks":14,"type":"album","uri":"spotify:album:3L7pWKpDt0YFxACcY0CbLR"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6m0MLa2Q5RwIF8R7nwQkQ2"},"href":"https://api.spotify.com/v1/artists/6m0MLa2Q5RwIF8R7nwQkQ2","id":"6m0MLa2Q5RwIF8R7nwQkQ2","name":"Yung Mal","type":"artist","uri":"spotify:artist:6m0MLa2Q5RwIF8R7nwQkQ2"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/5D5GuPJxd8GwhK66tZiAyE"},"href":"https://api.spotify.com/v1/albums/5D5GuPJxd8GwhK66tZiAyE","id":"5D5GuPJxd8GwhK66tZiAyE","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273299dd4e10457b62bd2f9723c","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02299dd4e10457b62bd2f9723c","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851299dd4e10457b62bd2f9723c","width":64}],"name":"6 Rings","release_date":"2020-03-05","release_date_precision":"day","total_tracks":12,"type":"album","uri":"spotify:album:5D5GuPJxd8GwhK66tZiAyE"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1v3tdpIdBSW14rHUfiEVOv"},"href":"https://api.spotify.com/v1/artists/1v3tdpIdBSW14rHUfiEVOv","id":"1v3tdpIdBSW14rHUfiEVOv","name":"Lauren Alaina","type":"artist","uri":"spotify:artist:1v3tdpIdBSW14rHUfiEVOv"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/4dKNidNDeT9LaPwjzrKv6c"},"href":"https://api.spotify.com/v1/albums/4dKNidNDeT9LaPwjzrKv6c","id":"4dKNidNDeT9LaPwjzrKv6c","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273df3add9950e7fba6bdc2f928","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02df3add9950e7fba6bdc2f928","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851df3add9950e7fba6bdc2f928","width":64}],"name":"Getting Good","release_date":"2020-03-06","release_date_precision":"day","total_tracks":6,"type":"album","uri":"spotify:album:4dKNidNDeT9LaPwjzrKv6c"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6QtgPSJPSzcnn7dPZ4VINp"},"href":"https://api.spotify.com/v1/artists/6QtgPSJPSzcnn7dPZ4VINp","id":"6QtgPSJPSzcnn7dPZ4VINp","name":"King Von","type":"artist","uri":"spotify:artist:6QtgPSJPSzcnn7dPZ4VINp"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/1ZRAeQ6zsPJ5W1K3DvpRpP"},"href":"https://api.spotify.com/v1/albums/1ZRAeQ6zsPJ5W1K3DvpRpP","id":"1ZRAeQ6zsPJ5W1K3DvpRpP","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2738649220140846c7edf7f1978","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e028649220140846c7edf7f1978","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048518649220140846c7edf7f1978","width":64}],"name":"Levon James","release_date":"2020-03-06","release_date_precision":"day","total_tracks":16,"type":"album","uri":"spotify:album:1ZRAeQ6zsPJ5W1K3DvpRpP"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/2pst3pDewxsl4kJERuDZpp"},"href":"https://api.spotify.com/v1/artists/2pst3pDewxsl4kJERuDZpp","id":"2pst3pDewxsl4kJERuDZpp","name":"Overcoats","type":"artist","uri":"spotify:artist:2pst3pDewxsl4kJERuDZpp"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/0ArmKxlIjju4bog52Q33ZE"},"href":"https://api.spotify.com/v1/albums/0ArmKxlIjju4bog52Q33ZE","id":"0ArmKxlIjju4bog52Q33ZE","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2733b76cb4bea25b5821d1909e3","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e023b76cb4bea25b5821d1909e3","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048513b76cb4bea25b5821d1909e3","width":64}],"name":"The Fight","release_date":"2020-03-06","release_date_precision":"day","total_tracks":10,"type":"album","uri":"spotify:album:0ArmKxlIjju4bog52Q33ZE"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/42A3nZSj9sLXPKpB4YgzSs"},"href":"https://api.spotify.com/v1/artists/42A3nZSj9sLXPKpB4YgzSs","id":"42A3nZSj9sLXPKpB4YgzSs","name":"Sharna Bass","type":"artist","uri":"spotify:artist:42A3nZSj9sLXPKpB4YgzSs"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/4cNRBzCLd4IhlrgLqPTpTW"},"href":"https://api.spotify.com/v1/albums/4cNRBzCLd4IhlrgLqPTpTW","id":"4cNRBzCLd4IhlrgLqPTpTW","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273ee8577a38ae22e743d43d0c5","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02ee8577a38ae22e743d43d0c5","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851ee8577a38ae22e743d43d0c5","width":64}],"name":"Beautiful Chaos","release_date":"2020-02-28","release_date_precision":"day","total_tracks":7,"type":"album","uri":"spotify:album:4cNRBzCLd4IhlrgLqPTpTW"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6piIAIurGAryW5h1rqQC16"},"href":"https://api.spotify.com/v1/artists/6piIAIurGAryW5h1rqQC16","id":"6piIAIurGAryW5h1rqQC16","name":"Passion","type":"artist","uri":"spotify:artist:6piIAIurGAryW5h1rqQC16"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3TlEGcbneZP4tE2V0dn1em"},"href":"https://api.spotify.com/v1/albums/3TlEGcbneZP4tE2V0dn1em","id":"3TlEGcbneZP4tE2V0dn1em","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2732854491e3ccca2d6b373e3ae","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e022854491e3ccca2d6b373e3ae","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048512854491e3ccca2d6b373e3ae","width":64}],"name":"Roar (Live From Passion 2020)","release_date":"2020-03-06","release_date_precision":"day","total_tracks":12,"type":"album","uri":"spotify:album:3TlEGcbneZP4tE2V0dn1em"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1dPl8axUL09mso0myZqPZW"},"href":"https://api.spotify.com/v1/artists/1dPl8axUL09mso0myZqPZW","id":"1dPl8axUL09mso0myZqPZW","name":"Matt Maher","type":"artist","uri":"spotify:artist:1dPl8axUL09mso0myZqPZW"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/1BxJ93fbfJSKQ4GWqUcQB9"},"href":"https://api.spotify.com/v1/albums/1BxJ93fbfJSKQ4GWqUcQB9","id":"1BxJ93fbfJSKQ4GWqUcQB9","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273cb3bfbf45d3a9519c5cbba95","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02cb3bfbf45d3a9519c5cbba95","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851cb3bfbf45d3a9519c5cbba95","width":64}],"name":"Alive & Breathing","release_date":"2020-03-06","release_date_precision":"day","total_tracks":14,"type":"album","uri":"spotify:album:1BxJ93fbfJSKQ4GWqUcQB9"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0tgjwsn1Lpjj8kKEvWm0KQ"},"href":"https://api.spotify.com/v1/artists/0tgjwsn1Lpjj8kKEvWm0KQ","id":"0tgjwsn1Lpjj8kKEvWm0KQ","name":"Doctor P","type":"artist","uri":"spotify:artist:0tgjwsn1Lpjj8kKEvWm0KQ"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/4V05Uxv24lXnxR3ghQZIgf"},"href":"https://api.spotify.com/v1/albums/4V05Uxv24lXnxR3ghQZIgf","id":"4V05Uxv24lXnxR3ghQZIgf","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27352ef1bb77516d83801f59f6f","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0252ef1bb77516d83801f59f6f","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485152ef1bb77516d83801f59f6f","width":64}],"name":"Animal Vegetable Mineral, Pt. 2","release_date":"2020-03-06","release_date_precision":"day","total_tracks":10,"type":"album","uri":"spotify:album:4V05Uxv24lXnxR3ghQZIgf"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms"},"href":"https://api.spotify.com/v1/artists/1HY2Jd0NmPuamShAr6KMms","id":"1HY2Jd0NmPuamShAr6KMms","name":"Lady Gaga","type":"artist","uri":"spotify:artist:1HY2Jd0NmPuamShAr6KMms"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/2HDW1EX8IBI3jqobswAfrZ"},"href":"https://api.spotify.com/v1/albums/2HDW1EX8IBI3jqobswAfrZ","id":"2HDW1EX8IBI3jqobswAfrZ","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273f80f544565b410d292349893","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02f80f544565b410d292349893","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851f80f544565b410d292349893","width":64}],"name":"Stupid Love","release_date":"2020-02-28","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:2HDW1EX8IBI3jqobswAfrZ"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"},"href":"https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP","id":"7tYKF4w9nC0nq9CsPZTHyP","name":"SZA","type":"artist","uri":"spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"},{"external_urls":{"spotify":"https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"},"href":"https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7","id":"31TPClRtHm23RisEBtV3X7","name":"Justin Timberlake","type":"artist","uri":"spotify:artist:31TPClRtHm23RisEBtV3X7"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/50ZTMRi6Biq1i1pWbcaKaJ"},"href":"https://api.spotify.com/v1/albums/50ZTMRi6Biq1i1pWbcaKaJ","id":"50ZTMRi6Biq1i1pWbcaKaJ","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2734ab68cbf11ff64edc27e6944","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e024ab68cbf11ff64edc27e6944","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048514ab68cbf11ff64edc27e6944","width":64}],"name":"The Other Side (from Trolls World Tour)","release_date":"2020-02-26","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:50ZTMRi6Biq1i1pWbcaKaJ"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1Hsdzj7Dlq2I7tHP7501T4"},"href":"https://api.spotify.com/v1/artists/1Hsdzj7Dlq2I7tHP7501T4","id":"1Hsdzj7Dlq2I7tHP7501T4","name":"Niall Horan","type":"artist","uri":"spotify:artist:1Hsdzj7Dlq2I7tHP7501T4"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/6qU8mH51eBvwyqYgg2Wsui"},"href":"https://api.spotify.com/v1/albums/6qU8mH51eBvwyqYgg2Wsui","id":"6qU8mH51eBvwyqYgg2Wsui","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273d31262de3fc693f90eee9940","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02d31262de3fc693f90eee9940","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851d31262de3fc693f90eee9940","width":64}],"name":"Spotify Singles","release_date":"2020-03-04","release_date_precision":"day","total_tracks":2,"type":"album","uri":"spotify:album:6qU8mH51eBvwyqYgg2Wsui"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5f7VJjfbwm532GiveGC0ZK"},"href":"https://api.spotify.com/v1/artists/5f7VJjfbwm532GiveGC0ZK","id":"5f7VJjfbwm532GiveGC0ZK","name":"Lil Baby","type":"artist","uri":"spotify:artist:5f7VJjfbwm532GiveGC0ZK"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/1ynyQdPQiXdYJNQEDL1S3d"},"href":"https://api.spotify.com/v1/albums/1ynyQdPQiXdYJNQEDL1S3d","id":"1ynyQdPQiXdYJNQEDL1S3d","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273f46a9ad551acbdab8f72fd89","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02f46a9ad551acbdab8f72fd89","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851f46a9ad551acbdab8f72fd89","width":64}],"name":"My Turn","release_date":"2020-02-28","release_date_precision":"day","total_tracks":20,"type":"album","uri":"spotify:album:1ynyQdPQiXdYJNQEDL1S3d"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/1vyhD5VmyZ7KMfW5gqLgo5"},"href":"https://api.spotify.com/v1/artists/1vyhD5VmyZ7KMfW5gqLgo5","id":"1vyhD5VmyZ7KMfW5gqLgo5","name":"J Balvin","type":"artist","uri":"spotify:artist:1vyhD5VmyZ7KMfW5gqLgo5"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/2JsshJwuZYg4sxp5e0PPJ7"},"href":"https://api.spotify.com/v1/albums/2JsshJwuZYg4sxp5e0PPJ7","id":"2JsshJwuZYg4sxp5e0PPJ7","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b2739b4fcf0a8855b0e69e06a77d","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e029b4fcf0a8855b0e69e06a77d","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d000048519b4fcf0a8855b0e69e06a77d","width":64}],"name":"Rojo","release_date":"2020-02-27","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:2JsshJwuZYg4sxp5e0PPJ7"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5t28BP42x2axFnqOOMg3CM"},"href":"https://api.spotify.com/v1/artists/5t28BP42x2axFnqOOMg3CM","id":"5t28BP42x2axFnqOOMg3CM","name":"Five Finger Death Punch","type":"artist","uri":"spotify:artist:5t28BP42x2axFnqOOMg3CM"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/7vAcymF4feKxvqcUDzLQD2"},"href":"https://api.spotify.com/v1/albums/7vAcymF4feKxvqcUDzLQD2","id":"7vAcymF4feKxvqcUDzLQD2","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27368780bf3f5a4af94f2c953c6","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0268780bf3f5a4af94f2c953c6","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485168780bf3f5a4af94f2c953c6","width":64}],"name":"F8","release_date":"2020-02-28","release_date_precision":"day","total_tracks":16,"type":"album","uri":"spotify:album:7vAcymF4feKxvqcUDzLQD2"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4aEnNH9PuU1HF3TsZTru54"},"href":"https://api.spotify.com/v1/artists/4aEnNH9PuU1HF3TsZTru54","id":"4aEnNH9PuU1HF3TsZTru54","name":"Caribou","type":"artist","uri":"spotify:artist:4aEnNH9PuU1HF3TsZTru54"}],"available_markets":["AR","BO","BR","CA","CL","CO","CR","DO","EC","GT","HN","MX","NI","PA","PE","PY","SV","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/4wSb7OhVUzw3u76lta9fJw"},"href":"https://api.spotify.com/v1/albums/4wSb7OhVUzw3u76lta9fJw","id":"4wSb7OhVUzw3u76lta9fJw","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27365fb6bba1aad6b27bf300072","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0265fb6bba1aad6b27bf300072","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485165fb6bba1aad6b27bf300072","width":64}],"name":"Suddenly","release_date":"2020-02-28","release_date_precision":"day","total_tracks":12,"type":"album","uri":"spotify:album:4wSb7OhVUzw3u76lta9fJw"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/04vj3iPUiVh5melWr0w3xT"},"href":"https://api.spotify.com/v1/artists/04vj3iPUiVh5melWr0w3xT","id":"04vj3iPUiVh5melWr0w3xT","name":"Christine and the Queens","type":"artist","uri":"spotify:artist:04vj3iPUiVh5melWr0w3xT"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3uF0lelesKigBc6H9NGzDq"},"href":"https://api.spotify.com/v1/albums/3uF0lelesKigBc6H9NGzDq","id":"3uF0lelesKigBc6H9NGzDq","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b27382c12a427c72396dc0bc3d4f","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e0282c12a427c72396dc0bc3d4f","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d0000485182c12a427c72396dc0bc3d4f","width":64}],"name":"La vita nuova","release_date":"2020-02-27","release_date_precision":"day","total_tracks":6,"type":"album","uri":"spotify:album:3uF0lelesKigBc6H9NGzDq"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4ETSs924pXMzjIeD6E9b4u"},"href":"https://api.spotify.com/v1/artists/4ETSs924pXMzjIeD6E9b4u","id":"4ETSs924pXMzjIeD6E9b4u","name":"Surfaces","type":"artist","uri":"spotify:artist:4ETSs924pXMzjIeD6E9b4u"}],"available_markets":["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],"external_urls":{"spotify":"https://open.spotify.com/album/3wmbsIFbLZ5FLT55iqB9KL"},"href":"https://api.spotify.com/v1/albums/3wmbsIFbLZ5FLT55iqB9KL","id":"3wmbsIFbLZ5FLT55iqB9KL","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273d87dd9780854f07967cae8ae","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02d87dd9780854f07967cae8ae","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851d87dd9780854f07967cae8ae","width":64}],"name":"Horizons","release_date":"2020-02-28","release_date_precision":"day","total_tracks":12,"type":"album","uri":"spotify:album:3wmbsIFbLZ5FLT55iqB9KL"}],"limit":50,"next":"https://api.spotify.com/v1/browse/new-releases?offset=50&limit=50","offset":0,"previous":null,"total":99}}';

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
        console.log(data);
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
        if (userAccessToken=='') data=JSON.parse(genmood_text);
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
        if (userAccessToken=='') data=JSON.parse(edpick_text);
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
        if (userAccessToken=='') data=JSON.parse(newrel_text);
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
document.getElementById("genmood").click(); 