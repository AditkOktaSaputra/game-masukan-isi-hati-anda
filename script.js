const inputPassword = document.getElementById('input-password');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener("click", () => {
     const Password = inputPassword.value;

    if (Password.length > 7) {
        errorMessage.textContent = Password;
        errorMessage.style.color = "green";
    } else {
        errorMessage.textContent = Password;
        errorMessage.style.color = "red";
    }
});