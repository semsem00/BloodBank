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



$("#sign_Up").click(function(){
  $("#logForm").fadeOut(1000 , function(){
    $("#signForm").fadeIn(1000);
  });
});

$("#sign_In").click(function(){
  $("#signForm").fadeOut(1000 , function(){
    $("#logForm").fadeIn();
  });
})




function validationName(){
  let nameRegex =  /^[a-z0-9]{3,10}$/;
  if (!nameRegex.test(signName.value)){
    signName.classList.add("is-invalid");
    signName.classList.remove("is-valid");
    console.log("false");
    return false;
  }else{
    signName.classList.add("is-valid");
    signName.classList.remove("is-invalid");
    console.log("True");
    return true;
  }
}

function validationEmail(){
let emailRegex =   /^[a-z]{3,15}[0-9]{0,}(@)[a-z]{4,8}\.(com)$/;
if (!emailRegex.test(signEmail.value)){
  signName.classList.add("is-invalid");
  signName.classList.remove("is-valid");
  console.log("false");
  return false;
}else{
  signName.classList.add("is-valid");
  signName.classList.remove("is-invalid");
  console.log("True");
  return true;
}
}

function validationPass(){
let emailRegex = /^[A-Za-z0-9][_]?\w{6,10}$/;
if (!emailRegex.test(signPass.value)){
  signName.classList.add("is-invalid");
  signName.classList.remove("is-valid");
  console.log("false");
  return false;
}else{
  signName.classList.add("is-valid");
  signName.classList.remove("is-invalid");
  console.log("True");
  return true;
}
}


// check the local storge is empty or not 
var userList = [];
if (localStorage.getItem("AllUsers") == null) {
   userList = [];
} else {
  var userList = JSON.parse(localStorage.getItem("AllUsers"));
}


  //for check inputs is empty or not
  function isEmpty() {

    if (signName.value == "" || signEmail.value == "" || signPass.value == "") {
        return false
    } else {
        return true
    }
}

// to check id the user already signed or not 
var existAccount = document.getElementById("existAccount");
function excistUser(){
  
   for(var i=0; i<userList.length; i++){
       if(userList[i].userName == signName.value ||
        userList[i].userEmail == signEmail.value){
            
            existAccount.classList.replace('d-none', 'd-block');
            signName.classList.remove("is-valid");
             signEmail.classList.remove("is-valid");
             signPass.classList.remove("is-valid")
           
          return true;  
       }
    }
    return false;
}


function signUP(){
   
  if (isEmpty() == false) {
    let exist = document.getElementById('exist')
    exist.classList.replace('d-none', 'd-block');
    existAccount.classList.replace('d-block', 'd-none');
    confirmFailed.classList.replace("d-block", "d-none");
    confirmSuccess.classList.replace("d-block", "d-none");

    return false
}

if( validationName()==true &&
    validationEmail()==true &&
    validationPass()==true &&
    excistUser()==false){
  let user = {
    userName: signName.value,
    userEmail: signEmail.value,
    userpass: signPass.value,
};
userList.push(user);
localStorage.setItem("AllUsers", JSON.stringify(userList));

 //when sign up sucess show this massage     
confirmSuccess.classList.replace("d-none", "d-block");
existAccount.classList.replace('d-block', 'd-none');
confirmFailed.classList.replace("d-block", "d-none");

}else if( excistUser()==true){
  existAccount.classList.replace('d-none', 'd-black');
  confirmSuccess.classList.replace("d-block", "d-none");
  confirmFailed.classList.replace("d-block", "d-none");
}else{
   // when sign up Failed show this massage   
confirmFailed.classList.replace("d-none", "d-block");
confirmSuccess.classList.replace("d-block", "d-none");
existAccount.classList.replace('d-block', 'd-none');
}
}





var errorMsg = document.getElementById("errorMsg");

function logIN(){
 
  if (logEmail.value == "" || logPass.value == "" ){
      var fillInp = document.getElementById("fillInp");
      fillInp.classList.replace('d-none', 'd-block');
      
  }else{
    
    for(var i=0; i<userList.length; i++){

      if(userList[i].userEmail == logEmail.value &&
       userList[i].userpass == logPass.value){
          
            // btnLogin.setAttribute("href", "index.html")
            errorMsg.classList.add("d-none");
            location.replace("main.html")
          }else{
         
            errorMsg.classList.replace("d-none", "d-block");

          }
        }
      }
    }






  

  

  