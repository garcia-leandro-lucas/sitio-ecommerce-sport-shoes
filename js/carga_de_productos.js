const PRODUCTOS_GRID = document.getElementById('ecommerce-sport-shoes__products-grid');
const URL_PRODUCTOS = '/js/productos.json';
let carritoDeCompra = [];

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
                        $
                            <span class="price">${Productos.precio}</span>
                        </p>
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
            
    })



    function anadirCarrito(e) {

        let carritoLocalStorage = JSON.parse(localStorage.getItem("carritoDeCompra"));
        //console.log(carritoLocalStorage);

        if(carritoLocalStorage) {
            carritoDeCompra = carritoLocalStorage;
        }

        //console.log(carritoDeCompra[1]);
        //console.log(e.target.parentNode.children[0].children[0].alt);

        let indexCarrito = carritoDeCompra.findIndex(producto => producto.id == e.target.parentNode.children[0].children[0].alt);

        console.log(indexCarrito);
        console.log(carritoDeCompra);

        //console.log(e.target.parentNode.children[0].children[0].alt);
        //console.log(e.target.parentNode.children[1].children[1].children[0].innerText);
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
        
        //console.log(carritoDeCompra);

        localStorage.setItem("carritoDeCompra", JSON.stringify(carritoDeCompra));
        carritoDeNavegacion(carritoDeCompra);
    }


    function carritoDeNavegacion(carritoDeCompra) {

        let carritoCantidad = document.getElementById('carrito-cantidad');
        let totalProductos = 0;

        for( let producto of carritoDeCompra ) {
            totalProductos += producto.cantidad;
        }

        carritoCantidad.innerHTML = "";
        carritoCantidad.innerHTML = `
        <span class="carrito-cantidad__numero">${totalProductos}</span>
        `;
    }


    