// GET STUDENT DATA
async function getData() {
    const response = await fetch('http://localhost/api/student-list.php');
    const data = await response.json();

    if (data.success) {
        displayStudents(data.students);
    }
}

// DISPLAY STUDENTS IN TABLE
function displayStudents(students) {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";

    students.forEach(student => {
        const row = `
            <tr>
                <td>${student.student_id}</td>
                <td>${student.first_name} ${student.last_name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>${student.year_level}</td>
                <td>${student.enrollment_date}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    document.getElementById("studentSection").style.display = "block";
}


// LOGIN FUNCTION
async function submitData(username, password) {
    const data = { username, password };

    const response = await fetch(
        'http://localhost/api/login.php',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
    );

    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.message || "Login Failed");
    }

    return resData;
}


// FORM EVENT
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");
    const logoutBtn = document.getElementById("logoutBtn");

    // LOGIN
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            await submitData(username, password);

            message.textContent = "Login Successful!";
            message.style.color = "green";

            document.getElementById("loginSection").style.display = "none";

            // Load students after login
            getData();

        } catch (error) {
            message.textContent = error.message;
            message.style.color = "red";
        }
    });

    // LOGOUT
    logoutBtn.addEventListener("click", function () {
        document.getElementById("studentSection").style.display = "none";
        document.getElementById("loginSection").style.display = "block";
        message.textContent = "";
        form.reset();
    });

});
