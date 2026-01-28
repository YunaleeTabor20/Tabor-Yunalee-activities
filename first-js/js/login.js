function login() {
    const Username = document.getElementById('Username').value;
    const Password = document.getElementById('Password').value;

    const error = document.getElementById('error');
    

    if ((Username == "yunalee") && (Password == "12345")) {
        error.innerHTML = "Login successful";
        error.style.color ='green';
        error.style.backgroundColor ='yellow';
        error.style.visibility = 'visible';

    }

    else{ 
        error.innerHTML = "Username or password is incorrect";
        error.style.color = 'red';
        error.style.visibility = 'visible';
    }
    }

