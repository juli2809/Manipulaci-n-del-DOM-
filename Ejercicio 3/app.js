// Selección de los elementos del DOM
const inputTarea = document.getElementById("tareaInput");
const botonAgregar = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

// Evento de clic al botón
botonAgregar.addEventListener("click", function() {
    const textoTarea = inputTarea.value.trim(); // Obtiene el texto y elimina espacios innecesarios

    if (textoTarea !== "") { // Verifica que no esté vacío
        const nuevaTarea = document.createElement("li"); // Crea un nuevo elemento <li>
        nuevaTarea.textContent = textoTarea; // Asigna el texto ingresado
        listaTareas.appendChild(nuevaTarea); // Agrega la tarea a la lista

        inputTarea.value = ""; // Limpia el campo de entrada
    } else {
        alert("Escribe una tarea.");
    }
});
