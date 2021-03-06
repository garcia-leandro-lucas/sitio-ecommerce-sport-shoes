'use strict';

/* Login de Usuario para el registro a la página */
import {
    nombre,
    apellido,
    dni,
    localidad,
    fecha_de_nacimiento,
    genero,
    email,
    contrasenia,
    confirmacion_de_contrasenia,
    form_registro,
    enviar_validacio_de_registro,
    mensaje
} from "./variables.js";

import {
    mensaje_de_confirmacion
} from "./funciones.js";

import {
    Usuario
} from "./class.js";

enviar_validacio_de_registro.addEventListener('click', (e) => {
    e.preventDefault();
    
    if ( es_valido_dato(nombre.value) && es_valido_dato(apellido.value) && es_valido_dato(dni.value) && es_valido_dato(localidad.value) && es_valido_dato(fecha_de_nacimiento.value) && es_valido_dato(genero.value) && es_valido_dato(email.value) && es_valido_dato(contrasenia.value) && es_valido_dato(confirmacion_de_contrasenia.value)) {
            
        // pedido_de_contraseña(contrasenia.value, confirmacion_de_contrasenia.value);
        // console.log("Pedido_de_contraseña");
        if( contrasenia.value === confirmacion_de_contrasenia.value ) {
            let nuevo_usuario = new Usuario(nombre.value, apellido.value, dni.value, localidad.value, fecha_de_nacimiento.value, genero.value, email.value, contrasenia.value, confirmacion_de_contrasenia.value);

            guardar_usuario(nuevo_usuario);
            //console.log("HOAL USUARIO GUARDADO");
            limpiarFormulario();
            mensaje_de_confirmacion();
        }else {
            let mensajeAlert = document.createElement('p');
            mensajeAlert.innerHTML = "Verifica que las contraseñas sean iguales.";
            mensajeAlert.style.color = "red";
            mensajeAlert.style.transition = "all 0.5s ease-out";
            mensaje.appendChild(mensajeAlert);
            
            setTimeout(function(){
                mensajeAlert.remove();   
                }, 3000);  
        }
        
        
    }else {
            swal("Por favor, debés completar todos los datos que estan solicitados en el formulario");
        }
})

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


// function es_valida_las_contrasenias(contrasenia, confirmacion_de_contrasenia) {
//     return contrasenia === confirmacion_de_contrasenia;
// }


// function pedido_de_contraseña(contrasenia, confirmacion_de_contrasenia) {
//     if( !es_valida_las_contrasenias(contrasenia, confirmacion_de_contrasenia) ) {
//         Swal.fire({
//             position: 'top-end',
//             icon: 'error',
//             title: 'OPSS',
//             showConfirmButton: false,
//             timer: 1500
//           })
//         //console.log("OPSS")
//         //swal ( "Oops" ,  "Something went wrong!" ,  "error" );
//         // contrasenia = prompt("Ingrese su contraseña:");
//         // confirmacion_de_contrasenia = prompt("Ingrese nuevamente su contraseña:");
//     }else {
//         continue;
//     }
// }


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