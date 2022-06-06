// /* 
//  * Mensaje de corroboración por parte del usuario.
//  * true: si los datos corrobarados por el usuario son correctos.
//  * false: si los datos corrobarados por el usuario son incorrectos.
//  *
// */

// let formLoginCkeck = document.getElementById('form-login__ckeck');
// let ConfirmacionDeRegistro = document.getElementById('enviarConfirmacionDeRegistro');



// function mensaje_de_confirmacion(usuario){

    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     let mensaje = "";
    
//     mensaje = `${mensaje} Por favor, corroborar que los datos ingresados son correctos:`;
//     mensaje = `${mensaje} \n Nombre: ${usuario.nombre}`;
//     mensaje = `${mensaje} \n Apellido: ${usuario.apellido}`;
//     mensaje = `${mensaje} \n D.N.I.: ${usuario.dni}`;
//     mensaje = `${mensaje} \n Localidad: ${usuario.localidad}`;
//     mensaje = `${mensaje} \n Fecha de Nacimiento: ${usuario.fecha_de_nacimiento}`;
//     mensaje = `${mensaje} \n Género: ${usuario.genero}`;
//     mensaje = `${mensaje} \n E-mail: ${usuario.email}`;

//     let confirmacion = confirm(mensaje);
//     return confirmacion
    
// }

// /* 
//  * Valida true o false si los campos a llenar por el usuario esta completados.
//  * true: si hay algo dentro del campo.
//  * false: si no hay nada en el campo.
//  *
// */
// function es_valido_dato(dato_ingresados) {

//     let datos = true;

//     if( !dato_ingresados || dato_ingresados.value == "" ) {
//         datos = false;
//         return datos;
//     }

//     return datos;
// }


// function es_valida_las_contrasenias(contrasenia, confirmacion_de_contrasenia) {
//     return contrasenia === confirmacion_de_contrasenia;
// }


// function pedido_de_contraseña(contrasenia, confirmacion_de_contrasenia) {
//     while( !es_valida_las_contrasenias(contrasenia, confirmacion_de_contrasenia) ) {
//         swal ( "Oops" ,  "Something went wrong!" ,  "error" )
//         contrasenia = prompt("Ingrese su contraseña:");
//         confirmacion_de_contrasenia = prompt("Ingrese nuevamente su contraseña:");
//     }
// }