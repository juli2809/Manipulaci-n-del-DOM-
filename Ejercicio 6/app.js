const formulario = document.getElementById("formulario");
const emailInput = document.getElementById("emailInput");
const mensajeError = document.getElementById("mensajeError");

// Expresión regular para validar email
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Evento de validación al enviar el formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    const email = emailInput.value.trim(); // Obtener el valor y eliminar espacios

    if (!regexEmail.test(email)) {
        mensajeError.textContent = "Por favor, ingrese un email válido.";
        mensajeError.style.color = "red";
    } else {
        mensajeError.textContent = "Email válido. Formulario enviado.";
        mensajeError.style.color = "green";
    }
});
