var firebaseConfig = {
     apiKey: "AIzaSyC8l8PEf9DW2S05XSdZiFeg7NHKaL1h524",
     authDomain: "instagram-acd64.firebaseapp.com",
     databaseURL: "https://instagram-acd64-default-rtdb.firebaseio.com",
     projectId: "instagram-acd64",
     storageBucket: "instagram-acd64.appspot.com",
     messagingSenderId: "305361147534",
     appId: "1:305361147534:web:3731625ab1883e20161bdf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("Name");
  
  document.getElementById("user_name").innerHTML="welcome "+user_name;

  function addroom(){
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose:"adding room name",

     });

     localStorage.setItem("room_name",room_name);
     window.location="msg.html";

  }

function getData() {
     firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log(Room_names);
          row="<div id='+Room_names+' class='room_name' onclick='redirectTOroomname(this.id);'>#"+Room_names+"</div>";
          document.getElementById("output").innerHTML += row;
      
    
     });});}
getData();

function redirectTOroomname(name){
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location="msg.html";
     
}


  