//const productosRelacionados = document.getElementById('grid-slick__grid');
$(document).ready(function(){

    const productosRelacionados = $('#grid-slick__grid');

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
                        <h4>${Productos.titulo}</h4>
                        <p>$${Productos.precio}</p>
                    `;
                    productosRelacionados.append(div);
    
                });
                $('#grid-slick__grid').slick({
                    speed: 300,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows:true
                    });
        });
    };
    
    cargarProductos();
})


