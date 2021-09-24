let Signup = document.getElementById("Signup");

function error(query , content){
    document.querySelector(query).innerHTML = content
}


let user = localStorage.getItem("user")
let userlist = []
if(user){
    userlist = JSON.parse(localStorage.getItem("user"));
}



Signup.onsubmit = function(e){
    e.preventDefault();

    error("#emailerror","")
    error("#passworderror","")
    error("#cfpassworderror","")

    let email = Signup.email.value;
    let password = Signup.password.value;
    let cfpassword = Signup.cfpassword.value;

    // localStorage.setItem("email",email);
    // localStorage.setItem("password",password);
    // localStorage.setItem("cfpassword",cfpassword);

    let validate = true;
    
    if(!email){
        error("#emailerror", "Email is required");
        validate = false;
    }
    if(!password){
        error("#passworderror", "Password is required");
        validate = false;
    }
    if(password.length < 6 && password.length > 12){
        error("#passworderror", "Password must be more than 6 characters and less than 12 characters");
        validate = false;
    }
    if(!cfpassword){
        error("#cfpassworderror", "cfpassword is required");
        validate = false;
    }
    if(cfpassword != password){
        error("#cfpassworderror", "cfpassword is not matched")
    }
    if(validate){
        let user ={
            email : email,
            password : password,
        }
        userlist.push(user)
        localStorage.setItem("user",JSON.stringify(userlist))
    }
}

