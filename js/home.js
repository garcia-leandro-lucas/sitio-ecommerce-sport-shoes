'use strict';

$(document).ready(function(){

    const productosRelacionados = $('#grid-slick__grid');
    const tituloRelacionados = $('.ecommerce-sport-shoes__grid-slick__title');

    let titulo = document.createElement('h4');
    titulo.innerHTML = `Productos relacionados`;
    tituloRelacionados.append(titulo);

    const carrito = JSON.parse(localStorage.getItem("carritoDeCompra"));
    const URL_PRODUCTOS = '/js/productos.json';
    
    const cargarProductos = () => {
        fetch(URL_PRODUCTOS)
        .then((res) => res.json())
        .then ((data) => {
            //console.log(data);
                data.forEach((Productos) =>{
                    let div = document.createElement('div');
                    div.setAttribute('class', 'grid-image');
                    div.innerHTML = `
                        <img id="grid-image" src="${Productos.imagen}" alt="${Productos.id}">
                        <div class="box-content">
                          <h4>${Productos.titulo}</h4>
                          <p>$${Productos.precio}</p>
                        </div>
                        <button class="btn btn-primary anadir-al-carrito">Agregar al carrito</button>
                    `;
                    productosRelacionados.append(div);
                });

                slideProductosRelacionados();
        });
    };
    //productosRelacionados.append(titulo);
    cargarProductos();
})




const slideProductosRelacionados = () => {
    $('#grid-slick__grid').slick({
        speed: 300,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
}


