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

export {
    cargarCarrito  
};