
//Acá si quiero diferenciar por marca o por tipo de indumentaria, es decir, calzados, remeras. Tendria que hacer un objeto para calzados y otro para indumentaria?

const Productos = [
    {
        id: 1,
        marca: 'Nike',
        titulo: 'Zapatillas Nike Run Swift 2',
        descripcion_corta:'Lorem ipsum dolor sit amet consectetur adipisicing elit. descripcion_corta.',
        descripcion_larga:'Lorem ipsum dolor sit amet consectetur adipisicing elit. descripcion_larga.',
        precio: 14999,
        categoria:'Urbano',
        genero: 'Unisex',
        talle: [40, 41, 42, 43, 44, 45],
        color: ['Negro', 'Blanco', 'Azul'],
        imagen: './img/nombre.jpg',
    },
    {
        id: 2,
        marca: 'Nike',
        titulo: 'Zapatillas NIKE MD Runner 2',
        descripcion_corta:'Lorem ipsum dolor sit amet consectetur adipisicing elit. descripcion_corta.',
        descripcion_larga:'Lorem ipsum dolor sit amet consectetur adipisicing elit. descripcion_larga.',
        precio: 45999,
        categoria:'Running',
        genero: 'Unisex',
        talle: [40, 41, 42, 43, 44, 45],
        color: ['Negro', 'Blanco', 'Azul'],
        imagen: './img/nombre.jpg',
    },
    {
        id: 3,
        marca: 'Nike',
        titulo: 'Zapatillas Nike Air Max Bella Tr 2',
        descripcion_corta:'Lorem ipsum dolor sit amet consectetur adipisicing elit. descripcion_corta.',
        descripcion_larga:'Lorem ipsum dolor sit amet consectetur adipisicing elit. descripcion_larga.',
        precio: 82999,
        categoria:'Training',
        genero: 'Unisex',
        talle: [40, 41, 42, 43, 44, 45],
        color: ['Gris', 'Turquesa ', 'Azul'],
        imagen: './img/nombre.jpg',
    }
]