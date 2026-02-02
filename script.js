function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}
function validateRegister() {
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;
    let confirmPassword = document.getElementById("regConfirm").value;

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }


    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }


    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration successful!");
    return true;
}

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Login successful!");
    return true;
}



