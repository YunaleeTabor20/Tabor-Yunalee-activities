function register () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const fullname = document.getElementById('fullname').value;
    
    if (username === "" || password === "" || confirmpassword === "" || fullname === "") {
        alert("Please fill in all fields");
    }
    else if (username != "yunalee") {
        alert("Wrong username");
    }
    else if (password != "12345") {
        alert("Wrong password");
    }
    else if (confirmpassword != password) {
        alert("Password does not match");
    }
    else {
        alert("You are now registered");
    }
}