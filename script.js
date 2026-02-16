
const loginFormBox = document.getElementById("loginForm");
const registerFormBox = document.getElementById("registerForm");


const showRegisterBtn = document.getElementById("showRegisterBtn");
const showLoginBtn = document.getElementById("showLoginBtn");


const loginForm = document.getElementById("loginFormElement");
const registerForm = document.getElementById("registerFormElement");


const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const regName = document.getElementById("regName");
const regEmail = document.getElementById("regEmail");
const regPassword = document.getElementById("regPassword");
const regConfirm = document.getElementById("regConfirm");



showRegisterBtn.addEventListener("click", () => {
    loginFormBox.style.display = "none";
    registerFormBox.style.display = "block";
});


showLoginBtn.addEventListener("click", () => {
    registerFormBox.style.display = "none";
    loginFormBox.style.display = "block";
});




registerForm.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(regEmail.value)) {
        alert("Please enter a valid email address");
        return;
    }

    if (regPassword.value.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (regPassword.value !== regConfirm.value) {
        alert("Passwords do not match");
        return;
    }

    alert("Registration Successful ✅");

   
    registerForm.reset();

    
    showLoginBtn.click();
});




loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (loginEmail.value === "" || loginPassword.value === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Login Successful ✅");

    loginForm.reset();
});
