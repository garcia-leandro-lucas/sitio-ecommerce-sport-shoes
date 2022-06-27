const carrito = JSON.parse(localStorage.getItem("carritoDeCompra"));
console.log(carrito);

let tbody = document.querySelector('#tbody');

function cargarCarrito(arrayCarritoDeProductos) {

    for( let producto of arrayCarritoDeProductos ) {

        let row = document.createElement('tr');
        row.innerHTML = `
            <th>${producto.id}</th>
            <th><img class="image-carrito" src="${producto.imagen}" alt="${producto.id}"></th>
            <th>${producto.titulo}</th>
            <th>$${producto.precio}</th>
            <th><input type="number" class="cantidad-de-productos" value="1"></th>
            <th>${producto.subtotal}</th>
            <th><button class="btn-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button></th>

        `;
        tbody.appendChild(row);

        console.log(producto.id);
    }

}
//<th>${producto.cantidad}</th>
cargarCarrito(carrito);

let btnEliminar = document.querySelectorAll('.btn-eliminar');

btnEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto);
});

function eliminarProducto(e) {
    //console.log(e.target.parentNode.id);
    let indexCarrito = carrito.findIndex(producto => producto.id == e.target.parentNode.id);
    //console.log(indexCarrito);
    carrito.splice(indexCarrito, 1);
    //console.log(e.target.parentNode.parentNode.parentNode);
    e.target.parentNode.parentNode.parentNode.remove();
    localStorage.setItem("carritoDeCompra", JSON.stringify(carrito));
}

let cantidadDeProductos = document.querySelectorAll('.cantidad-de-productos');
cantidadDeProductos.forEach(elemento => {
    elemento.addEventListener("change", cambiaLaCantidadDeProductos);
});


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








