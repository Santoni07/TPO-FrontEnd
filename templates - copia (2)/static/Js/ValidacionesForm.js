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

document.addEventListener("DOMContentLoaded", function() {

    // Función para validar que el campo de nombre no esté vacío
    function validateNameInput(nameInput) {
        let nameValue = nameInput.value.trim(); // Elimina espacios en blanco al inicio y al final del valor
        let errorMessage = document.getElementById("name-compare");
        
        if (nameValue === "") {
            // Si el campo de nombre está vacío, muestra el mensaje de error y cambia el borde a rojo
            nameInput.style.borderColor = "darkgray";
            errorMessage.style.display = "block";
            nameInput.classList.add("valid-input");
        } else {
            // Si el campo de nombre no está vacío, restablece el borde a su color original (gris) y oculta el mensaje de error
            nameInput.style.borderColor = "initial";
            errorMessage.style.display = "none";
            nameInput.classList.remove("valid-input");
        }
    }

    // Función para validar el email en tiempo real
    function validateEmailInput(emailInput) {
        let emailValue = emailInput.value;
        let emailerrorMessage = document.getElementById("email-compare");
        
        if (emailValue.includes("@") && emailValue.includes(".com")) {
            // Si el email es válido, restablece el borde a su color original (gris)
            emailInput.style.borderColor = "initial";
            emailerrorMessage.style.display = "none";
            emailInput.classList.add("valid-input");


        } else {
            // Si hay un error, cambia el borde a rojo y muestra el mensaje de error
            emailInput.style.borderColor = "darkgray";
            emailerrorMessage.style.display = "block";
            emailInput.classList.remove("valid-input");
        
        }
    }

    // Función para validar la longitud de la contraseña en tiempo real
    function validatePasswordInput(passwordInput) {
        let passwordLengthMessage = document.getElementById("password-length-register");
        
        if (passwordInput.value.length < 8) {
            // Si la longitud de la contraseña es menor a 8 caracteres, muestra el mensaje de error
            passwordLengthMessage.style.display = "block";
            passwordInput.style.borderColor = "darkgray";
            passwordInput.classList.add("valid-input");
        } else {
            // Si la longitud de la contraseña es válida, oculta el mensaje de error
            passwordLengthMessage.style.display = "none";
            passwordInput.style.borderColor = "initial";
            passwordInput.classList.remove("valid-input");
        }
    }

    // Función para validar la coincidencia de las contraseñas en tiempo real
    function validatePasswordMatch(passwordInput, repeatPasswordInput) {
        let passwordCompareMessage = document.getElementById("password-compare");
        
        if (passwordInput.value !== repeatPasswordInput.value) {
            // Si las contraseñas no coinciden, muestra el mensaje de error
            passwordCompareMessage.style.display = "block";
            repeatPasswordInput.style.borderColor = "darkgray";
            repeatPasswordInput.classList.add("valid-input");
        } else {
            // Si las contraseñas coinciden, oculta el mensaje de error
            passwordCompareMessage.style.display = "none";
            repeatPasswordInput.style.borderColor = "initial";
            repeatPasswordInput.classList.remove("valid-input");
        }
    }

    // Asignar eventos de entrada a los campos de nombre ,email y contraseña
    document.getElementById("user-name").addEventListener("blur", function() {
        validateNameInput(this);
    });
    document.getElementById("email-register").addEventListener("input", function() {
        validateEmailInput(this);
    });
    document.getElementById("email-login").addEventListener("input", function() {
        validateEmailInput(this);
    });
    

    document.getElementById("password-input").addEventListener("input", function() {
        validatePasswordInput(this);
    });
    document.getElementById("password-login").addEventListener("input", function() {
        validatePasswordInput(this);
    });

    document.getElementById("repeat-password-input").addEventListener("input", function() {
        validatePasswordMatch(document.getElementById("password-input"), this);
    });

});