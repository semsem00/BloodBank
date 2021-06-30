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


  //for check inputs is empty or not
  function isEmpty() {

    if (signName.value == "" || signEmail.value == "" || signPass.value == "") {
        return false
    } else {
        return true
    }
}  


function signUP(){
   
  if (isEmpty() == false) {
    let exist = document.getElementById('exist')
    exist.classList.replace('d-none', 'd-block');
    return false
}

if( validationName()==true &&
    validationEmail()==true &&
    validationPass()==true &&
    excistUser()==false){
  let user = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
};
userList.push(user);
localStorage.setItem("allUsers", JSON.stringify(userList));

 //when sign up sucess show this massage     
confirmSuccess.classList.replace("d-none", "d-block");
existAccount.classList.replace('d-block', 'd-none');
confirmFailed.classList.replace("d-block", "d-none");

}else if( excistUser()==true){
  existAccount.classList.replace('d-none', 'd-black');
  confirmSuccess.classList.replace("d-none", "d-block");
  confirmFailed.classList.replace("d-block", "d-none");
}else{
   // when sign up Failed show this massage   
confirmFailed.classList.replace("d-none", "d-block");
confirmSuccess.classList.replace("d-block", "d-none");
}
}




// to check id the user already signed or not 
var existAccount = document.getElementById("existAccount");
function excistUser(){
  
   for(var i=0; i<userList.length; i++){
       if(userList[i].userName.toLowerCase() == signName.value.toLowerCase() ||
        userList[i].userEmail.toLowerCase() == signEmail.value.toLowerCase()){
            
            existAccount.classList.replace('d-none', 'd-block');
            signName.classList.remove("is-valid");
             signEmail.classList.remove("is-valid");
             signPass.classList.remove("is-valid")
           
          return true;  
       }
    }
    return false;
}









  

  

  