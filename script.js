// cipar-cortar evento onpaste, copy, cut
document.getElementById("password").onpaste = function(event) {
    input.onpaste = function(event) {
        event.preventDefault();
      };
    }
    document.getElementById("password_").onpaste = function(event) {
      input.oncut = input.oncopy = function(event) {
        event.preventDefault();
      };
    }
    
    // evento para el boton de confirmar
    document.getElementById("confirmar").addEventListener("click", function(event){
        // recogemos los datos del formulario
        let usuario = document.getElementById('usuario').value;
        let correo = document.getElementById('mail').value;
        let password = document.getElementById('password').value;
        let confirmPass = document.getElementById('password_').value;
    
        // validar si las contaseñas coinciden
        if(password !== confirmPass){
            // mostrar mensaje de error
            document.getElementById('errorMen').innerHTML = "*Las contraseñas no coinciden*";
            // preventDefault() para que no se envie
            event.preventDefault();
        } else{
            // eliminar mensaje de error si coinciden
            document.getElementById('errorMen').innerHTML = "";
            // almacenar los datos en el sessionStorage
            sessionStorage.setItem('usuario', usuario);
            sessionStorage.setItem('correo', correo);
            sessionStorage.setItem('password', password);
        }
    });
    
    // funcion para cancelar el registro(borrar datos del sessionStorage)
    document.getElementById("cancelar").addEventListener("click", function() {
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('correo');
        sessionStorage.removeItem('password');
    })