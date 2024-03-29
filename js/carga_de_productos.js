'use strict';
/* Inicio: Se importan clases */
import {
    Producto
} from "./class.js";
/* Fin: Se importan clases */

/* Inicio: Se importan constantes */
import {
    PRODUCTOS_GRID,
    URL_PRODUCTOS
} from "./constantes.js";
/* Fin: Se importan constantes */

/* Inicio: Se importan funciones */
import {
    carritoDeNavegacion,
    mensajeSeAgregoExitosamente
} from "./funciones.js";
/* Fin: Se importan funciones */

let carritoDeCompra = [];

const cargarProductos = () => {
    fetch(URL_PRODUCTOS)
    .then((res) => res.json())
    .then ((data) => {
        //console.log(data);
            data.forEach((Productos) =>{
                let div = document.createElement('div');
                //div.setAttribute('class', 'contenedor-de-productos');
                div.innerHTML = `
                <div class="product-grid">
                    <div class="product-image">
                        <img class="product-image__img" src="${Productos.imagen}" alt="${Productos.id}">
                        <div class="product-button-link">
                            <ul class="product-button__link">
                                <li><i class="bi bi-three-dots"></i></li>
                                <li><i class="bi bi-search"></i></li>
                                <li><i class="bi bi-heart"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-title">
                        <a href="#">
                            <h4 class="">${Productos.titulo}</h4>
                        </a>  
                        <p class="product-price">$<span class="price">${Productos.precio}</span></p>
                    </div>
                    <button class="btn btn-primary anadir-al-carrito">Agregar al carrito</button>
                </div>
                `
                PRODUCTOS_GRID.appendChild(div);

            })

            let btnAgregarCarrito = document.querySelectorAll('.anadir-al-carrito');
            btnAgregarCarrito.forEach(elemento => {
                elemento.addEventListener("click",anadirCarrito);
            });

            let carritoLocalStorage = JSON.parse(localStorage.getItem("carritoDeCompra"));
            if(carritoLocalStorage) {
                carritoDeNavegacion(carritoLocalStorage);
            }

            let productImage = document.querySelectorAll('.product-image');
            productImage.forEach(e => {
                //e.preventDefault();
                e.addEventListener("mouseover", mostrarIconos);
                //e.addEventListener("mouseout", ocultarIconos);
            });

            function mostrarIconos(e) {
                let iconos = e.target.parentNode.children[1];
                iconos.style.display = 'block';   
            }
            
            function ocultarIconos(e) {
                let iconos = e.target.parentNode.children[1];
                iconos.style.display = 'none';
            }  
    });
}

cargarProductos();

/*
 * Añade al carrito el producto seleccionado y lo guarda en el localStorage
*/
function anadirCarrito(e) {

    mensajeSeAgregoExitosamente();

    let carritoLocalStorage = JSON.parse(localStorage.getItem("carritoDeCompra"));

    if(carritoLocalStorage) {
        carritoDeCompra = carritoLocalStorage;
    }

    let indexCarrito = carritoDeCompra.findIndex(producto => producto.id == e.target.parentNode.children[0].children[0].alt);

    console.log(indexCarrito);
    console.log(carritoDeCompra);

    let id_del_producto = e.target.parentNode.children[0].children[0].alt;
    let image_del_producto = e.target.parentNode.children[0].children[0].src;
    let nombre_del_producto = e.target.parentNode.children[1].children[0].innerText;
    let precio_del_producto = e.target.parentNode.children[1].children[1].children[0].innerText;

    if(indexCarrito === -1) {
        const producto = new Producto(id_del_producto,image_del_producto, nombre_del_producto, precio_del_producto );
        carritoDeCompra.push(producto);
    }else {
        carritoDeCompra[indexCarrito].cantidad++;
        carritoDeCompra[indexCarrito].subtotal = carritoDeCompra[indexCarrito].precio * carritoDeCompra[indexCarrito].cantidad;
    }

    localStorage.setItem("carritoDeCompra", JSON.stringify(carritoDeCompra));
    carritoDeNavegacion(carritoDeCompra);
}
    