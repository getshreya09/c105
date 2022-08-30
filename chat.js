// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBGdO5t3kyReqxqwDp7eBSxJi0oDFGc75k",
    authDomain: "noor-b136f.firebaseapp.com",
    databaseURL: "https://noor-b136f-default-rtdb.firebaseio.com",
    projectId: "noor-b136f",
    storageBucket: "noor-b136f.appspot.com",
    messagingSenderId: "317705203410",
    appId: "1:317705203410:web:d3c9ea410cbc41ddb4c70b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



