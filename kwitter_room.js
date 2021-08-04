
//ADD YOUR FIREBASE LINKS HERE
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

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name;

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addingroom_name"
          });
          localStorage.setItem("room_name",room_name)
          window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name - "+room_name);
       row = "<div class='room_name' id="+Room_names+" onclickredirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       Document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}