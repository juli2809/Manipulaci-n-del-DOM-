const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");

// Evento para mostrar/ocultar contraseña
togglePassword.addEventListener("change", function() {
    if (togglePassword.checked) {
        passwordInput.type = "text"; // Mostrar contraseña
    } else {
        passwordInput.type = "password"; // Ocultar contraseña
    }
});
