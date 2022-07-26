'use strict';
/*
 *
 * Se carga los productos por medio de un template recorriendo un array de productos.
 * 
*/
function cargarCarrito(arrayCarritoDeProductos) {

    for( let producto of arrayCarritoDeProductos ) {
        
        tbodyRow.innerHTML = `
            <th>${producto.id}</th>
            <th><img class="image-carrito" src="${producto.imagen}" alt="${producto.id}"></th>
            <th>${producto.titulo}</th>
            <th>$${producto.precio}</th>
            <th>${producto.cantidad}</th>
            <th>${producto.subtotal}</th>
            <th><button class="btn-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button></th>
        `;

        tbody.appendChild(tbodyRow);
        
    }
    //<th><input type="number" class="cantidad-de-productos" value=${producto.cantidad}></th>

    let btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
        <button class="btn btn-primary" id="comprar">Comprar</button>
    `;
    btnComprar.appendChild(btnDiv);
}

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
 * Mensaje por Toastify de que se Agrego un producto al carrito correctamente
*/
const mensajeSeAgregoExitosamente = () => {
        
    Toastify({
        text: "Producto agregado con exito!",
        destination: "/src/views/carrito.html",
        className: "mensaje-se-agrego-exitosamente",
        close: false,
        gravity: "bottom",
        duration: 30000
        }).showToast();

}

/*
 * Se genera un contador en el icono del carrito del header
*/
function carritoDeNavegacion(carritoDeCompra) {

    let carritoCantidad = document.querySelector('.carrito-cantidad');
    let totalProductos = 0;

    for( let producto of carritoDeCompra ) {
        totalProductos += producto.cantidad;
    }

    if(totalProductos > 0) {
        carritoCantidad.innerHTML = "";
        carritoCantidad.innerHTML = `
        <span class="carrito-cantidad__numero">${totalProductos}</span>
        `;
    }
}

export {
    cargarCarrito,
    mensaje_de_confirmacion,
    mensajeSeAgregoExitosamente,
    carritoDeNavegacion
};