'use strict';

/* Inicio: Se importan variables */
import {
    arrayUsuarios
} from "./variables.js";
/* Fin: Se importan variables */

/* Inicio: Se importan constantes */
import {
    recuperarStorage
} from "./constantes.js";
/* Fin: Se importan constantes */


if(recuperarStorage) {
    arrayUsuarios = recuperarStorage;

    let  {

        nombre, apellido, dni, localidad, fecha_de_nacimiento, genero, email

    } = arrayUsuarios[0];

    let usuario_nombre = document.getElementById('nombre');
    let usuario_apellido = document.getElementById('apellido');
    let usuario_dni = document.getElementById('dni');
    let usuario_localidad = document.getElementById('localidad');
    let usuario_fecha_de_nacimiento = document.getElementById('fecha-de-nacimiento');
    let usuario_genero = document.getElementById('genero');
    let usuario_email = document.getElementById('email');
    
    usuario_nombre.innerText = nombre;
    usuario_apellido.innerText = apellido;
    usuario_dni.innerText = dni;
    usuario_localidad.innerText = localidad;
    usuario_fecha_de_nacimiento.innerText = fecha_de_nacimiento;
    usuario_genero.innerText = genero;
    usuario_email.innerText = email;
    
        console.log(usuario.nombre);
        console.log(usuario.apellido); 
        console.log(usuario.dni); 
        console.log(usuario.localidad);
    
}

