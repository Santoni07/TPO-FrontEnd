// Validacion para cambiar la visibilidad del password
function passwordVisibility(InputId, iconId) {
    let passwordInput = document.getElementById(InputId);
    let icon = document.getElementById(iconId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}



// Función genérica para validar cualquier campo de entrada que no esté vacío
function validateRequiredInput(inputElement, errorMessageElementId) {
    let inputValue = inputElement.value.trim();
    let errorMessageElement = document.getElementById(errorMessageElementId);
    
    if (inputValue === "") {
        inputElement.style.borderColor = "#d32f2f";// me va a cambiar el borde a rojo
        errorMessageElement.style.display = "block";// me va a mostrar el mensaje
        inputElement.classList.remove("valid-input");// remueve la clase valid-input
        return false;
    } else {
        inputElement.style.borderColor = "black";// me va a cambiar el borde a negro
        errorMessageElement.style.display = "none"; // me va a ocultar el mensaje
        inputElement.classList.add("valid-input");// agrega la clase valid-input
        return true;
    }
}

// Función genérica para validar el formato de un correo electrónico
function validateEmailFormat(emailInput, errorMessageElementId) {
    let emailValue = emailInput.value;
    let errorMessageElement = document.getElementById(errorMessageElementId);

    if(emailValue.includes("@") && emailValue.includes(".com")) { // expresion regular 
        emailInput.style.borderColor = "black";
        errorMessageElement.style.display = "none";
        emailInput.classList.add("valid-input");
        return true;
    } else {
        emailInput.style.borderColor = "#d32f2f";
        errorMessageElement.style.display = "block";
        emailInput.classList.remove("valid-input");
        return false;
    }
}

// Función genérica para validar la longitud de una contraseña
function validatePasswordLength(passwordInput, minLength, errorMessageElementId) {
    let passwordLengthMessage = document.getElementById(errorMessageElementId);
    
    if (passwordInput.value.length < minLength) {
        passwordLengthMessage.style.display = "block";
        passwordInput.style.borderColor = "#d32f2f";
        passwordInput.classList.remove("valid-input");
        return false;
    } else {
        passwordLengthMessage.style.display = "none";
        passwordInput.style.borderColor = "black";
        passwordInput.classList.add("valid-input");
        return true;
    }
}

// Función genérica para validar que dos contraseñas coincidan
function validatePasswordMatch(passwordInput, repeatPasswordInput, errorMessageElementId) {
    let passwordCompareMessage = document.getElementById(errorMessageElementId);
    
    if (passwordInput.value !== repeatPasswordInput.value) {
        passwordCompareMessage.style.display = "block";
        repeatPasswordInput.style.borderColor = "#d32f2f";
        repeatPasswordInput.classList.remove("valid-input");
        return false;
    } else {
        passwordCompareMessage.style.display = "none";
        repeatPasswordInput.style.borderColor = "black";
        repeatPasswordInput.classList.add("valid-input");
        return true;
    }
}

// Event listeners para los campos de entrada del formulario de registro manejo del DOM
document.addEventListener("DOMContentLoaded", function() {
    let nameInput = document.getElementById("user-name");
    let emailInputRegister = document.getElementById("email-register");
	let emailInputLogin = document.getElementById("email-login");
    let passwordInputRegister = document.getElementById("password-input");
	let passwordInputLogin = document.getElementById("password-input-login");
    let repeatPasswordInput = document.getElementById("repeat-password-input");
    
    if (nameInput) {
        nameInput.addEventListener("input", function() {
            validateRequiredInput(this, "name-compare");
        });
    }
    
    if (emailInputRegister) {
        emailInputRegister.addEventListener("input", function() {
            validateEmailFormat(this, "email-compare");
        });
    }
	if (emailInputLogin) {
        emailInputLogin.addEventListener("input", function() {
            validateEmailFormat(this, "email-compare1");
        });
    }
    if (passwordInputLogin) {
        passwordInputLogin.addEventListener("input", function() {
            validatePasswordLength(this, 8, "password-length-login");
        });
    }
    if (passwordInputRegister) {
        passwordInputRegister.addEventListener("input", function() {
            validatePasswordLength(this, 8, "password-length-register");
        });
    }
    
    if (repeatPasswordInput) {
        repeatPasswordInput.addEventListener("input", function() {
            validatePasswordMatch(passwordInputRegister, this, "password-compare");
        });
    }
});
