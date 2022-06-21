let arrayUsuarios = Usuario;
const recuperarStorage = JSON.parse(localStorage.getItem("listasDeUsuarios"));

if(recuperarStorage) {
    arrayUsuarios = recuperarStorage;

    //let usuario  = arrayUsuarios[0];
    // let nombreid = document.getElementById('nombreid');
    // nombreid.innerText = usuario.nombre;

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


    // let nombreid = document.getElementById('nombreid');
    // nombreid.innerText = usuario.nombre;

        console.log(usuario.nombre);
        console.log(usuario.apellido); 
        console.log(usuario.dni); 
        console.log(usuario.localidad);
    
}





// console.log(arrayUsuarios.nombre); 
// console.log(arrayUsuarios.apellido); 
// console.log(arrayUsuarios.dni); 
// console.log(arrayUsuarios.localidad);  // Estos datos son los que necesito imprimir. Pero no pasa nada. No se como pensar en el manejo de los datos


// console.log(recuperarStorage.nombre); 
// console.log(recuperarStorage.apellido); 
// console.log(recuperarStorage.dni); 
// console.log(recuperarStorage.localidad);

