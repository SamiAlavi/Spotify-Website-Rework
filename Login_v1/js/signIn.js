var firebaseConfig = {
    apiKey: "AIzaSyB8RqI3iNIxwIFvj5ZV9ZQviubcEkPxUCg",
    authDomain: "test123-68acd.firebaseapp.com",
    databaseURL: "https://test123-68acd.firebaseio.com",
    projectId: "test123-68acd",
    storageBucket: "test123-68acd.appspot.com",
    messagingSenderId: "246352930220",
    appId: "1:246352930220:web:6f12a41de998c3e84e4609"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signIn(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("pwd").value;

	console.log(email);
	console.log(password);

	firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
		console.log("SSSSSSS");
		window.location.href = "../dashboard.html";
	}).catch(function(error){
		var errorCode = error.code;
		var errorMessage = error.message;
		alert("Username or Password is incorrect!");
		console.log("Authentication failed!");
	});

}