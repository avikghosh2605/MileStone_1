function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Password Matched";
            message.style.backgroundColor = "#1dcd59";
            document.getElementById("message");
            console.log("Password validation Successful")
        }
        else{
            message.textContent = "Password didn't match";
            message.style.backgroundColor = "#ff4d4d";
            console.log("Password validation unsuccessful")
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}