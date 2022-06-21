const PRODUCTOS_GRID = document.getElementById('ecommerce-sport-shoes__products-grid');
const URL_PRODUCTOS = '/js/productos.json';

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
                        <img src="${Productos.imagen}" alt="${Productos.id}">
                        <div class="product-button-link">
                        <ul>
                            <li><i class="bi bi-three-dots"></i></li>
                            <li><i class="bi bi-search"></i></li>
                            <li><i class="bi bi-heart"></i></li>
                        </ul>
                        </div>
                    </div>
                    <div class="product-title">
                        <h4 class="">
                            <a href="#">${Productos.titulo}</a>      
                        </h4>
                        <p class="product-price">
                            <span class="price">$${Productos.precio}</span>
                        </p>
                    </div>
                </div>
                `
                PRODUCTOS_GRID.append(div);

            })
    })



