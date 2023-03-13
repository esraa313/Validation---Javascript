function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  function emaildetect(){
    val = document.getElementById("email").value ;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (val != ""){ 
        if(!regEmail.test(val)){
        document.getElementById('emailErr').textContent = "Invalid Email";
        document.getElementById('emailErr').style.color="red" ;
        document.getElementById("email").style.borderColor = "red" ;
        printError("emailErr", "Please enter valid email");

            }else{
            document.getElementById('emailErr').style.color="green" ;
            document.getElementById("email").style.borderColor = "green" ;
            printError("emailErr", "");
            emailErr = false ;
            }}else{
        document.getElementById('emailErr').style.color="red"
        document.getElementById("email").style.borderColor = "red" ;
        printError("emailErr", "Please enter your email");
    }}

   function passworddetect(){
        val = document.getElementById("password").value ;
        var regPassword = /^[A-Za-z]\w{7,14}$/;
        if (val != ""){ 
            if(!regPassword.test(val)){
                document.getElementById('passwordErr').style.color="red" ;
            document.getElementById("password").style.borderColor = "red" ;
            printError("passwordErr", "Please enter valid password");

                }else{
                document.getElementById('passwordErr').style.color="green" ;
                document.getElementById("password").style.borderColor = "green" ;
                printError("passwordErr", "");
              passwordErr = false; 
    
                }}else{
            document.getElementById("passwordErr").style.color = "red" ;
            document.getElementById("passwordErr").style.borderColor = "red" ;
            printError("passwordErr", "Please select your password");
        }
  
  // Defining a function to validate form
  function validateForm() {
  // Retrieving the values of form elements

  var email = document.contactForm.email.value;
  var password = document.contactForm.password.value;
 
  // Defining error variables with a default value
  var emailErr = passwordErr = true;
  emaildetect();
  passworddetect();
}}
const element = document.getElementById("btn")
element.addEventListener("click",btn);

function btn(){
 emaildetect();
  passworddetect();
  if(( emailErr ||  passwordErr) == true) {
    return false;
    }else{
           var dataPreview = "You've entered the following details: \n" + "Email Address: " + email + "\n" + "password: " + password + "\n";
    alert(dataPreview); }
    };
  

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
    
  });