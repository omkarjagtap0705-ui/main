// =========================================
// Instagram Signup Form - JavaScript
// =========================================

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Get form
    const form = document.querySelector("form");

    // Submit button
    const submitButton = document.querySelector(".submit");

    // Password field
    const password = document.querySelector("input[type='password']");

    // Form submit event
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if(password.value.length < 6){

            alert("Password should contain at least 6 characters.");

            password.focus();

            return;

        }

        alert("Account Created Successfully!");

    });

    // Focus effect for all inputs

    const inputs = document.querySelectorAll("input, select");

    inputs.forEach(function(input){

        input.addEventListener("focus", function(){

            this.style.borderColor = "#1877F2";

        });

        input.addEventListener("blur", function(){

            this.style.borderColor = "#d6d6d6";

        });

    });

});