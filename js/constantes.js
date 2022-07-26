'use strict';
/* Precios de envíos por zonas */
const COSTO_DE_ENVIO_CABA = 600;
const COSTO_DE_ENVIO_GBA = 900;
const COSTO_DE_ENVIO_INT_GBA = 600;

/* Marcas deportivas */
const NIKE = "Nike";
const ADIDAS = "Adidas";
const TOPPER = "Toper";
const FILA = "Fila";

/* Impuestos */
const IVA = 0.21;
const CARRITO = JSON.parse(localStorage.getItem("carritoDeCompra"));

const PRODUCTOS_GRID = document.getElementById('ecommerce-sport-shoes__products-grid');
const URL_PRODUCTOS = '/js/productos.json';

const recuperarStorage = JSON.parse(localStorage.getItem("listasDeUsuarios"));



export {
    CARRITO,
    PRODUCTOS_GRID,
    URL_PRODUCTOS,
    recuperarStorage
}