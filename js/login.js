let arrayUsuarios = Usuario;
const recuperarStorage = JSON.parse(localStorage.getItem("listasDeUsuarios"));

if(recuperarStorage) {
    arrayUsuarios = recuperarStorage;
}

let InputEmail = document.getElementById('InputEmail').value;
let InputPassword = document.getElementById('InputPassword').value;
let check = document.getElementById('check').value;
let submitLogin = document.getElementById('submitLogin');

submitLogin.addEventListener('click', checklogin);


/* Acá validamos si existe el usuario que se quiere loguear */
function checklogin(e) {
    e.preventDefault();
    let emailIngresado = e.target.parentNode.children[0].children[1].value;
    let passIngresado = e.target.parentNode.children[1].children[1].value;
    
    let buscarUsuario = arrayUsuarios.find(usuario => usuario.email === emailIngresado);

    if(buscarUsuario != undefined) {
        if(buscarUsuario.email === emailIngresado && buscarUsuario.contrasenia ===  passIngresado) {
            console.log("Hola"+ buscarUsuario.email );
        }else {
            console.log("El nombre de usuario o contraseña son incorrectos");
        }
    }else {
        console.log("El usuario no existe");
    }

    //console.log(buscarUsuario);
}