const carrito = JSON.parse(localStorage.getItem("carritoDeCompra"));
//console.log(carrito);
carritoDeNavegacion(carrito);

let tbody = document.querySelector('#tbody');
let btnComprar = document.querySelector('#btnComprar');


function cargarCarrito(arrayCarritoDeProductos) {

    for( let producto of arrayCarritoDeProductos ) {

        let tbodyRow = document.createElement('tr');

        tbodyRow.innerHTML = `
            <th>${producto.id}</th>
            <th><img class="image-carrito" src="${producto.imagen}" alt="${producto.id}"></th>
            <th>${producto.titulo}</th>
            <th>$${producto.precio}</th>
            <th><input type="number" class="cantidad-de-productos" value=${producto.cantidad}></th>
            <th>${producto.subtotal}</th>
            <th><button class="btn-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button></th>
        `;

        tbody.appendChild(tbodyRow);
        
    }

    let btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
        <button class="btn btn-primary" id="comprar">Comprar</button>
    `;
    btnComprar.appendChild(btnDiv);
}

cargarCarrito(carrito);


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
    carritoDeNavegacion(carrito);
    localStorage.clear();
    setTimeout(function(){
        window.location.href = "/index.html";   
    }, 2000);
}

function eliminarProducto(e) {
    mensajeSeEliminoExitosamente();
    console.log(e.target.parentNode.id);
    let indexCarrito = carrito.findIndex(producto => producto.id == e.target.parentNode.id);
    //console.log(indexCarrito);
    carrito.splice(indexCarrito, 1);
    //console.log("Este es un: " + e.target.parentNode);
    e.target.parentNode.parentNode.parentNode.remove();
    carritoDeNavegacion(carrito);

    localStorage.setItem("carritoDeCompra", JSON.stringify(carrito));
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
        carrito[indexCarrito].cantidad++;
        carrito[indexCarrito].subtotal = carrito[indexCarrito].precio * carrito[indexCarrito].cantidad;
        console.log(carrito[indexCarrito].subtotal);
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
        close: true,
        duration: 30000
    }).showToast();

}

function mensajeSeRealizoLaCompraExitosamente() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu compra se realizo con exito!!',
        showConfirmButton: false,
        timer: 1500
      })
}





