//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDzwnr0NwJOKcelPzlFn_qeCWkYOLrkLsw",
      authDomain: "classtest2-d2eeb.firebaseapp.com",
      databaseURL: "https://classtest2-d2eeb-default-rtdb.firebaseio.com",
      projectId: "classtest2-d2eeb",
      storageBucket: "classtest2-d2eeb.appspot.com",
      messagingSenderId: "77401354650",
      appId: "1:77401354650:web:1e98c21844f350578e4a23",
      measurementId: "G-YK90WQGH41"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name")
    room_name = localStorage.getItem("room_name")

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name + "<img class='user_tick' src='tic.png'></h4> ";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class='btn btn-warning' id=" + firebase_message_id +"value =" + like +"onclick='updatelike(this.id)'>";
         span_with_tag = "<span class ='glypicon glypicon-thumbs-up'>like: " + like +"</span> </button> <hr>";

         row = name_with_tag +message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
         

      } });  }); }
getData();
function updatelike(message_id)
{
    console.log(" clicked on like button - " + message_id);
    button_id = message_id; 
     likes = document.getElementById(button_id).value;
     updated_likes = Number(likes) + 1; 
     console.log(updated_likes);

     firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
     
})};