/**/
let tbody = document.querySelector('#tbody');
let btnComprar = document.querySelector('#btnComprar');
let tbodyRow = document.createElement('tr');
/**/

/**/
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
/**/

export {
    tbody,
    btnComprar,
    tbodyRow,
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
    enviar_validacio_de_registro
}