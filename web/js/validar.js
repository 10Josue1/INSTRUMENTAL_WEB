function isValidEmail(email) {
    // Expresión regular para validar un correo electrónico
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function validarFormulario() {
    var nombres = document.getElementById("txtnom").value;
    var correo = document.getElementById("txtCorreo").value;
    var errorNombres = document.getElementById("errorNombres");
    var errorCorreo = document.getElementById("errorCorreo");
    var isValid = true;

    errorNombres.textContent = "";
    errorCorreo.textContent = "";

    // Validación de nombres (no debe estar vacío)
    if (nombres.trim() === "") {
        errorNombres.textContent = "Por favor, ingrese su nombre";
        isValid = false;
    }

    // Validación de correo (debe ser un formato de correo válido)
    if (!isValidEmail(correo)) {
        errorCorreo.textContent = "Por favor, ingrese su contraseña";
        isValid = false;
    }

    return isValid;
}
