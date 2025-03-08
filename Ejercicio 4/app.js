
const inputTarea = document.getElementById("tareaInput");
const botonAgregar = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

botonAgregar.addEventListener("click", function() {
    const textoTarea = inputTarea.value.trim(); 

    if (textoTarea !== "") {
        const nuevaTarea = document.createElement("li"); 
        nuevaTarea.textContent = textoTarea; 

        // Crear botón de eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");

        // Evento para eliminar la tarea
        botonEliminar.addEventListener("click", function() {
            listaTareas.removeChild(nuevaTarea); // Elimina la tarea de la lista
        });

        // Agregar botón de eliminar a la tarea
        nuevaTarea.appendChild(botonEliminar);

        // Agregar la tarea a la lista
        listaTareas.appendChild(nuevaTarea);

        // Limpiar el campo de entrada
        inputTarea.value = "";
    } else {
        alert("Escribe una tarea.");
    }
});
