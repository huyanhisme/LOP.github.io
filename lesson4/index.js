
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const cfPassword = document.getElementById("cfPassword");



function Submit(){
    const email = Email.value;
    const password = Password.value;
    const cfpassword = cfPassword.value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("cfpassword", cfpassword)
}




// let Signup = document.getElementById("Signup")

// Signup.onsubmit = function(e){
//     e.preventDefault();

//     let email = Signup.email.value;
//     let password = Signup.pw.value;
//     let cfpassword = Signup.cfpw.value;

//     localStorage.getItem("users",JSON.stringify({
//         email: email, 
//         password: password,
//         cfpassword : cfpassword,
//     }))
// }