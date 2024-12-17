
function convertirMajuscula(input) {
    input.value = input.value
        .toLowerCase() // Converteix tot a minúscules.
        .replace(/\b\w/g, char => char.toUpperCase()); // Converteix a majúscula la primera lletra de cada paraula. 
        //\b (cincideix amb l'inici de cada paraula). \w Coincideix amb qualsevol caràctr alfanumèric.
}

 // Mostrar/ocultar contrasenya principal
 document.getElementById("ocultarContrasenya").addEventListener("change", function () {
    const contrasenyaField = document.getElementById("contrasenya");
    contrasenyaField.type = this.checked ? "text" : "password";
});

// Mostrar/ocultar confirmar contrasenya
document.getElementById("ocultarConfirmarContrasenya").addEventListener("change", function () {
    const confirmarContrasenyaField = document.getElementById("confirmarContrasenya");
    confirmarContrasenyaField.type = this.checked ? "text" : "password";
});

// Validar coincidencia de contraseñas al escribir en el campo de confirmar contrasenya
document.getElementById("confirmarContrasenya").addEventListener("input", function () {
    const contrasenya = document.getElementById("contrasenya").value;
    const confirmarContrasenya = this.value;
    const errorMessage = document.getElementById("errorMessage");
    if (contrasenya !== confirmarContrasenya) {
        errorMessage.style.display = "inline"; // Mostrar error si no coinciden
    } else {
        errorMessage.style.display = "none"; // Ocultar error si coinciden
    }
});
// Validar coincidencia de contraseñas al enviar el formulario
document.getElementById("form").addEventListener("submit", function (event) {
    const contrasenya = document.getElementById("contrasenya").value;
    const confirmarContrasenya = document.getElementById("confirmarContrasenya").value;
    // Si las contraseñas no coinciden, se detiene el envío
    if (contrasenya !== confirmarContrasenya) {
        event.preventDefault(); // Detener el envío
        alert("Les contrasenyes no coincideixen.");
    }
});