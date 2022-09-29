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
room_name=localStorage.getItem("room_name");

function send(){
   msg=document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    likes:0
   });
   document.getElementById("msg").value="";


}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data);

      Name_1=message_data["name"];
      message=message_data["message"];
      likes=message_data["likes"];

    
      Name_with_tag="<h4>"+Name_1+"</h4>";
      message_tag="<h4 class='message_h4'>"+message+"</h4>";
      likes_btn="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updatelike(this.id);'>";
      span_tag="<span class='glyphicon glyphicon-thumbs-up' > like: "+likes+"</span></button><hr>";

row=Name_with_tag+message_tag+likes_btn+span_tag;

document.getElementById("output").innerHTML+=row;



   } });  }); }

   function updatelike(message_id){
      console.log("click on the button with id ="+message_id);
      likes=document.getElementById(message_id).value;
      update_likes=Number(likes)+1;
      console.log(update_likes);
      firebase.database().ref(room_name).child(message_id).update({
            likes:update_likes
      });
   }
getData() ;