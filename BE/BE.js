
var form = document.forms.login;
var email = form.email;
var pswd = form.pswd;
var submitbtn = document.sbmt;
form.onsubmit = display;
function display(){
    console.assert(
        email.value === 'Admintest@test.com', 
        "User is not an Admin!"
      );
  alert("Logged in!!! " + email.value + " " + pswd.value );

}