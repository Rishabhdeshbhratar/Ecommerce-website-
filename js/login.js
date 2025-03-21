// Get the login form and the error message element
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Dummy credentials
const validUsername = "admin";
const validPassword = "12345";
const validEmail="admin@12345";
const validName="admin";

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const Email = document.getElementById('Email').value;
    const Name = document.getElementById('Name').value;
    
    

    // Check if the username and password match the dummy credentials
    if (username === validUsername && password === validPassword && Email===validEmail && Name === validName) {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to another page (dashboard)
    } else {
        errorMessage.style.display = 'block'; // Show error message
    }
});
