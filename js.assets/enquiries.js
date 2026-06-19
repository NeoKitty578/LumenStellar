const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("successMessage").textContent = "";

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const reason = document.getElementById("reason");
    const message = document.getElementById("message");

    let valid = true;

    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });

    document.querySelectorAll("input, select, textarea").forEach(field => {
        field.classList.remove("error-border", "success-border");
    });

    // Name validation
    if (name.value.trim() === "") {
        showError(name, "Please enter your name.");
        valid = false;
    } else {
        name.classList.add("success-border");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        showError(email, "Please enter your email address.");
        valid = false;
    }
    else if (!emailPattern.test(email.value)) {
        showError(email, "Please enter a valid email address.");
        valid = false;
    }
    else {
        email.classList.add("success-border");
    }

    // Dropdown validation
    if (reason.value === "") {
        showError(reason, "Please select a reason.");
        valid = false;
    } else {
        reason.classList.add("success-border");
    }

    // Message validation
    if (message.value.trim() === "") {
        showError(message, "Please enter a message.");
        valid = false;
    }
    else if (message.value.trim().length < 10) {
         showError(message, "Message must be at least 10 characters.");
        valid = false;
    }
    else {
        message.classList.add("success-border");
    }

    if (valid) {
        document.getElementById("successMessage").textContent ="Message submitted successfully!";
        form.reset();
        document.querySelectorAll("input, select, textarea").forEach(field => {
            field.classList.remove("success-border");
        });
    }
});

function showError(field, message) {

    field.classList.add("error-border");

    const errorElement =
        field.parentElement.querySelector(".error");

    errorElement.textContent = message;
}