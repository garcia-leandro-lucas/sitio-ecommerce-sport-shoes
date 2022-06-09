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

let enviar_validacio_de_registro = document.getElementById('enviarValidacionDeRegistro');

enviar_validacio_de_registro.addEventListener('click', () => {// aca conviene colocar el evento submit?
    //e.preventDefault();
    
    if ( es_valido_dato(nombre.value) && es_valido_dato(apellido.value) && es_valido_dato(dni.value) && es_valido_dato(localidad.value) && es_valido_dato(fecha_de_nacimiento.value) && es_valido_dato(genero.value) && es_valido_dato(email.value) && es_valido_dato(contrasenia.value) && es_valido_dato(confirmacion_de_contrasenia.value)) {
            
        pedido_de_contraseña(contrasenia.value, confirmacion_de_contrasenia.value);
        console.log("Pedido_de_contraseña");

        let nuevo_usuario = new Usuario(nombre.value, apellido.value, dni.value, localidad.value, fecha_de_nacimiento.value, genero.value, email.value, contrasenia.value, confirmacion_de_contrasenia.value);

        guardar_usuario(nuevo_usuario);

        let validacion_de_datos_usuario = mensaje_de_confirmacion(nuevo_usuario);
        let check = true;
        //console.log("Estoy antes de while check");
    
        while(check){
            console.log("Estoy dentro de while check");
            if(validacion_de_datos_usuario) {
                console.log("Estoy dentro de while y del check");
                console.log(nuevo_usuario);
                nuevo_usuario.mostrar_bienvenida();
                check = false;
                        
            }else {
                        
                let datos = parseInt(prompt("¿Qué datos quisieras modificar?\nPor favor, seleccione un número según corresponda la opción a modificar:\n1) Nombre\n2) Apellido\n3) D.N.I.\n4) Localidad\n5) Fecha de nacimiento\n6) Género\n7) Email\n8) Ninguno. Los datos estan correctos."));
        
                switch(datos){
                    case 1:
                        let nombre = prompt("Ingrese su nombre:");
                        nuevo_usuario.nombre = nombre;
                        break;
                            
                        case 2:
                            let apellido = prompt("Ingrese su apellido:");
                            nuevo_usuario.apellido = apellido;
                            break;
                            
                        case 3:
                            let dni = prompt("Ingrese su D.N.I.::");
                            nuevo_usuario.dni = dni;
                            break;
        
                        case 4:
                            let localidad = prompt("Ingrese su localidad:");
                            nuevo_usuario.localidad = localidad;
                            break;
        
                        case 5:
                            let fecha_de_nacimiento = prompt("Ingrese su fecha de nacimiento:");
                            nuevo_usuario.fecha_de_nacimiento = fecha_de_nacimiento;
                            break;
        
                        case 6:
                            let genero = prompt("Ingrese su género:");
                            nuevo_usuario.genero = genero;
                            break;
        
                        case 7:
                            let email = prompt("Ingrese su género:");
                            nuevo_usuario.email = email;
                            break;
                            
                        case 8:
                            validacion_de_datos_usuario = true;
                            nuevo_usuario.mostrar_bienvenida();
                            console.log(nuevo_usuario);
                            break
                        }
    
                        validacion_de_datos_usuario = mensaje_de_confirmacion(nuevo_usuario);
                    }
    
        }
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
function mensaje_de_confirmacion(usuario){

    let mensaje = "";
    
    mensaje = `${mensaje} Por favor, corroborar que los datos ingresados son correctos:`;
    mensaje = `${mensaje} \n Nombre: ${usuario.nombre}`;
    mensaje = `${mensaje} \n Apellido: ${usuario.apellido}`;
    mensaje = `${mensaje} \n D.N.I.: ${usuario.dni}`;
    mensaje = `${mensaje} \n Localidad: ${usuario.localidad}`;
    mensaje = `${mensaje} \n Fecha de Nacimiento: ${usuario.fecha_de_nacimiento}`;
    mensaje = `${mensaje} \n Género: ${usuario.genero}`;
    mensaje = `${mensaje} \n E-mail: ${usuario.email}`;

    let confirmacion = confirm(mensaje);
    return confirmacion
    
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