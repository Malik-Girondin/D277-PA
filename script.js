// Email address verification

document.addEventListener("DOMContentLoaded", function () {
    const emailField = document.getElementById("mail");
    const confirmEmailField = document.getElementById("confirm-mail");
    const emailMatchText = document.getElementById("email-match-text");

    confirmEmailField.addEventListener("input", function () {
        if (confirmEmailField.value === emailField.value) {
            emailMatchText.textContent = "Emails match";
            emailMatchText.style.color = "green";
        } else {
            emailMatchText.textContent = "Emails don't match";
            emailMatchText.style.color = "red";
        }
    });

    // Prevent default form submission
    
    document.getElementById("email-form").addEventListener("submit", function (event) {
        event.preventDefault();
    });
});







