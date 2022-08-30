// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCe5zcB9vlphtpZvQSfQUXs5g-r-rgL9Ew",
    authDomain: "letschatwebapp-e20df.firebaseapp.com",
    projectId: "letschatwebapp-e20df",
    storageBucket: "letschatwebapp-e20df.appspot.com",
    messagingSenderId: "320266551175",
    appId: "1:320266551175:web:192c5c5f2bfc368d319d22",
    measurementId: "G-6S0SR7V6BV"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "LetsChatApp.html";
}

function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "LetsChatWebApp_page.html";
}

function getData()
{
    firebaseConfig.database().ref("/").o('value',
    function(snapshot)
    {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot)) 
        {
childkey = childSnapshot.key;
room_names  = childkey;
row = "div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        }})};
        getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "LetsChatWebApp_page.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() {firebase.database().ref("/" + room_name).on('value',
 function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
childData = shildSnapshot.val();
if(childKey !="purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> " + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
      message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
      like_button = "<button class = 'btn btn_warning' id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
}});});}