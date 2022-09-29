

function addUser(){
    Name = document.getElementById("in_1").value;
    Password=document.getElementById("in_2").value;
    if(Password , Name ==""){
        document.getElementById("L_1").innerHTML="Enter name and password";
    }
    else
    {
        localStorage.setItem("Name",Name);
        window.location="Main.index.html";}
    }
