/* Se exportan contantes */
import {
    CARRITO
} from "./constantes.js";

/* Se exportan variables */
import {
    tbody,
    btnComprar
} from "./variables.js";

import {
    carritoDeNavegacion
} from "./funciones.js";

//console.log(carrito);
carritoDeNavegacion(CARRITO);

function cargarCarrito(arrayCarritoDeProductos) {

    for( let producto of arrayCarritoDeProductos ) {

        let tbodyRow = document.createElement('tr');

        tbodyRow.innerHTML = `
            <th>${producto.id}</th>
            <th><img class="image-carrito" src="${producto.imagen}" alt="${producto.id}"></th>
            <th>${producto.titulo}</th>
            <th>$${producto.precio}</th>
            <th>${producto.cantidad}</th>
            <th>${producto.subtotal}</th>
            <th><button class="btn-eliminar btn btn-danger" id="${producto.id}"><i class="bi bi-trash-fill"></i></button></th>
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

cargarCarrito(CARRITO);


let btnEliminar = document.querySelectorAll('.btn-eliminar');

btnEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto);
});


btnComprar.addEventListener('click',comprarProducto);

function comprarProducto(e) {
    console.log(e.target);
    //console.log(e.target.parentNode.parentNode);
    (e.target.parentNode.parentNode.parentNode.children[0].children[1]).remove();
    e.target.parentNode.parentNode.remove();
    mensajeSeRealizoLaCompraExitosamente();
    carritoDeNavegacion(CARRITO);
    localStorage.clear();
    setTimeout(function(){
        window.location.href = "/index.html";   
    }, 2000);
}

function eliminarProducto(e) {
    mensajeSeEliminoExitosamente();
    console.log(e.target.parentNode.id);
    let indexCarrito = CARRITO.findIndex(producto => producto.id == e.target.parentNode.id);
    //console.log(indexCarrito);
    CARRITO.splice(indexCarrito, 1);
    //console.log("Este es un: " + e.target.parentNode);
    e.target.parentNode.parentNode.parentNode.remove();
    carritoDeNavegacion(CARRITO);

    localStorage.setItem("carritoDeCompra", JSON.stringify(CARRITO));
}

let cantidadDeProductos = document.querySelectorAll('.cantidad-de-productos');
cantidadDeProductos.forEach(elemento => {
    elemento.addEventListener("change", cambiaLaCantidadDeProductos);
});

//implementar un id dentro del input, capturar el valor
//


function cambiaLaCantidadDeProductos(e) {
    let input = e.target;
    //console.log(input);
    if(input.value <= 0){
        input.value = 1;
    }
    //input.value <= 0 ? input.value = 1: null;
    let indexCarrito = carritoDeCompra.findIndex(producto => producto.id == e.target.parentNode.children[0].children[0].alt);
    if(input.value > 1) {
        CARRITO[indexCarrito].cantidad++;
        CARRITO[indexCarrito].subtotal = CARRITO[indexCarrito].precio * CARRITO[indexCarrito].cantidad;
        console.log(CARRITO[indexCarrito].subtotal);
    }
}

/*
 * Mensaje por Toastify de que se elimino el producto Correctamente
*/
function mensajeSeEliminoExitosamente() {

    Toastify({
        text: "Producto Elimino con exito!",
        destination: "/src/views/carrito.html",
        className: "mensaje-se-elimino-exitosamente",
        close: false,
        duration: 30000
    }).showToast();

}

/*
 * Mensaje por Toastify de que se elimino el producto Correctamente
*/
function mensajeSeRealizoLaCompraExitosamente() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu compra se realizo con exito!!',
        showConfirmButton: false,
        timer: 1500
      })
}





