// for skitter 

$(document).ready(function() {
    $(".skitter-large").skitter({
       
        fullscreen:true,
        theme:"clean",
    
        animation: 'random',
        responsive: {
          small: {
            animation: 'fade',
            max_width: 768,
            suffix: '-small'
          },
          medium: {
            animation: 'directionRight',
            max_width: 1024,
            suffix: '-medium'
          }
        }
    });
  });


// globale variable

let logEmail= document.getElementById("logEmail");
let logPass=document.getElementById("logPass");
let signName=document.getElementById("signName");
let signEmail=document.getElementById("signEmail");
let signPass=document.getElementById("signPass");
let btnLogin=document.getElementById("btnLogin");
let btnSignup=document.getElementById("btnSignup");
let confirmFailed = document.getElementById("confirmFailed");
let confirmSuccess = document.getElementById("confirmSuccess");



// check the local storge is empty or not 
var userList = [];
if (localStorage.getItem("allUsers") == null) {
   userList = [];
} else {
  var userList = JSON.parse(localStorage.getItem("allUsers"));
}

function signUP(){

}











  let userList = [];

  

  