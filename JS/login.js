//Step-1: Add event on submit button.
document.getElementById('btn-submit').addEventListener('click', function(){

//step-2: receive data from inputs
const emailField=document.getElementById('user-email');
const email = emailField.value;

const passwordField=document.getElementById('user-password');
const password = passwordField.value;
// console.log(email, password)  //for testing purpose only

//step-3: validate data from inputs
if (email=== 'i@me.com' && password==='nora'){
//    console.log('valid user')  //for testing purpose only
    window.location.href='./bank.html';
}
else{
//    console.log('Invalid user')  //for testing purpose only
    alert('Wrong credentials provided.');
}

})