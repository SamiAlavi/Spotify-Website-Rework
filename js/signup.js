// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var dbRef = firebase.database();

function formatDate() {
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
document.getElementById("datepicker").setAttribute("max",formatDate());

function togglepwd(){
	var x = document.getElementById("pwdS");
	var y = document.getElementById("pwdT");
	if (x.getAttribute("type") == "Password") { x.setAttribute("type","text"); y.setAttribute("value","Hide");}
	else { x.setAttribute("type","Password"); y.setAttribute("value","Show");}
}

function validateinputs(inputVals){
	inputVals.forEach(function(val) {
	    if (val == ''){
	    	return false;
	    }
	});

	if (!$.isNumeric(inputVals[4]) || !$.isNumeric(inputVals[5]) || 
		inputVals[4].length<2 || inputVals[4].length>4 ||
		inputVals[5].length<7 || inputVals[5].length>11 || 
		inputVals[0].match(/^[a-zA-Z]+$/)==null || inputVals[1].match(/^[a-zA-Z]+$/)==null) {
		return false;
		}
	return true;
}

var inputVals = [];
var inputs = ['First Name', 'Last Name', 'Username', 'Password', 'Phone Code', 'Phone Number', 'Date of birth']
$(document).ready(function() {
    $("#btnSubmit").click(function(){
		var i=0;
		var pass = true;
		var json = {};

        $('.inputs').each(function(){
        	inputVals[i] = $(this).val();
        	json[ inputs[i] ] = inputVals[i];
        	i=i+1;
		});
		console.log(json);

		pass = validateinputs(inputVals);
		
		if (pass){
			console.log('Upload/Passed');
			var usersRef = dbRef.ref('users/'+inputVals[2]);
			usersRef.set(json);
			window.location.href = "Login_v1/signin.html";
		}
    }); 
});
