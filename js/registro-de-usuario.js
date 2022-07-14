/* Login de Usuario para el registro a la página */

//let registro_de_usuario = confirm("Desea registrarse en nuestro sitio");
let nombre = document.getElementById('validacionName');
let apellido = document.getElementById('validacionApellido');
let dni = document.getElementById('validacionDni');
let localidad = document.getElementById('validacionLocalidad');
let fecha_de_nacimiento = document.getElementById('validacionFechaDeNacimiento');
let genero = document.getElementById('validacionGenero');
let email = document.getElementById('validacionEmail');
let contrasenia = document.getElementById('validacionContrasenia');
let confirmacion_de_contrasenia = document.getElementById('validacionConfirmacionContrasenia');
let form_registro = document.getElementById('form-registro');

let enviar_validacio_de_registro = document.getElementById('enviarValidacionDeRegistro');

enviar_validacio_de_registro.addEventListener('click', (e) => {// aca conviene colocar el evento submit?
    e.preventDefault();
    
    if ( es_valido_dato(nombre.value) && es_valido_dato(apellido.value) && es_valido_dato(dni.value) && es_valido_dato(localidad.value) && es_valido_dato(fecha_de_nacimiento.value) && es_valido_dato(genero.value) && es_valido_dato(email.value) && es_valido_dato(contrasenia.value) && es_valido_dato(confirmacion_de_contrasenia.value)) {
            
        pedido_de_contraseña(contrasenia.value, confirmacion_de_contrasenia.value);
        console.log("Pedido_de_contraseña");

        let nuevo_usuario = new Usuario(nombre.value, apellido.value, dni.value, localidad.value, fecha_de_nacimiento.value, genero.value, email.value, contrasenia.value, confirmacion_de_contrasenia.value);

        guardar_usuario(nuevo_usuario);
        console.log("HOAL USUARIO GUARDADO");
        limpiarFormulario();
        mensaje_de_confirmacion();
        
    }else {
            swal("Por favor, debés completar todos los datos que estan solicitados en el formulario");
        }
})



/* 
 * Mensaje de corroboración por parte del usuario.
 * true: si los datos corrobarados por el usuario son correctos.
 * false: si los datos corrobarados por el usuario son incorrectos.
 *
*/
function mensaje_de_confirmacion(){

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Te has registrado con exito!!',
        showConfirmButton: false,
        timer: 5500
      });

    setTimeout(function(){
        window.location.href = "/src/views/login.html";   
    }, 3000);
}

/* 
 * Valida true o false si los campos a llenar por el usuario esta completados.
 * true: si hay algo dentro del campo.
 * false: si no hay nada en el campo.
 *
*/
function es_valido_dato(dato_ingresados) {

    let datos = true;

    if( !dato_ingresados || dato_ingresados.value == "" ) {
        datos = false;
        return datos;
    }

    return datos;
}

function limpiarFormulario() {
    form_registro.reset()
}


function es_valida_las_contrasenias(contrasenia, confirmacion_de_contrasenia) {
    return contrasenia === confirmacion_de_contrasenia;
}


function pedido_de_contraseña(contrasenia, confirmacion_de_contrasenia) {
    while( !es_valida_las_contrasenias(contrasenia, confirmacion_de_contrasenia) ) {
        swal ( "Oops" ,  "Something went wrong!" ,  "error" )
        contrasenia = prompt("Ingrese su contraseña:");
        confirmacion_de_contrasenia = prompt("Ingrese nuevamente su contraseña:");
    }
}


function guardar_usuario(usuario_nuevo) {

    let usuario = localStorage.getItem("listasDeUsuarios");

    if (usuario){

        let usuarioAlmacenados = JSON.parse(localStorage.getItem("listasDeUsuarios"));
        usuarioAlmacenados.push(usuario_nuevo);
        let usuarioAlmacenadosString = JSON.stringify(usuarioAlmacenados);
        localStorage.setItem("listasDeUsuarios",usuarioAlmacenadosString);

    }else{

        let usuarioAlmacenados = new Array();
        usuarioAlmacenados.push(usuario_nuevo);
        let usuarioAlmacenadosString = JSON.stringify(usuarioAlmacenados);
        localStorage.setItem("listasDeUsuarios",usuarioAlmacenadosString);


  }
}