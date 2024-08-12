$(document).ready(function(){
    $("#cerrarSesion").click(function(event){
        event.preventDefault();
        alert("Cerrando sesión...");
        // Aquí puedes redirigir al usuario a la página de inicio de sesión
        window.location.href = "login.html";
    });
});
