let arrayUsuarios = Usuario;
const recuperarStorage = JSON.parse(localStorage.getItem("listasDeUsuarios"));

if(recuperarStorage) {
    arrayUsuarios = recuperarStorage;

    let InputEmail = document.getElementById('InputEmail').value;
    let InputPassword = document.getElementById('InputPassword').value;
    let check = document.getElementById('check').value;
    let submitLogin = document.getElementById('submitLogin');
    let mensajeDeStatus = document.getElementById('mensajeDeStatus');

    submitLogin.addEventListener('click', checklogin);

}

/* Acá validamos si existe el usuario que se quiere loguear */
function checklogin(e) {
    e.preventDefault();
    let emailIngresado = e.target.parentNode.children[0].children[1].value;
    let passIngresado = e.target.parentNode.children[1].children[1].children[0].value;
    
    let buscarUsuario = arrayUsuarios.find(usuario => usuario.email === emailIngresado);
    console.log(buscarUsuario);

    if(buscarUsuario != undefined) {
        if(buscarUsuario.email === emailIngresado && buscarUsuario.contrasenia ===  passIngresado) {
            //console.log("Hola"+ buscarUsuario.email );
            console.log("Hola" +  buscarUsuario.nombre);
            console.log(mostrar_bienvenida());
            buscarUsuario.mostrar_bienvenida();
        }else {
            let textoDeAviso = document.createElement('p');
            textoDeAviso.setAttribute('class', 'mensaje-de-status__datos-incorrectos');
            textoDeAviso.innerHTML = `El nombre de usuario o contraseña son incorrectos. <br> Por favor vuelva a verificar los datos.`
            mensajeDeStatus.appendChild(textoDeAviso);
        }
    }else {
        let textoDeAviso = document.createElement('p');
        textoDeAviso.setAttribute('class', 'mensaje-de-status__usuario-no-existe');
        textoDeAviso.innerHTML = `El usuario no existe. Si, desea registrarse, presione <a id="registrateAhora" href="register.html"><strong >aquí</strong></a>`;
        mensajeDeStatus.appendChild(textoDeAviso).hide(3000);
    }
}

