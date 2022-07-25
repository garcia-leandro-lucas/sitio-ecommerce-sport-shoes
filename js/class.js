/* Inicio de Constructor de Usuarios */
class Usuario {
	constructor( nombre, apellido, dni, localidad, fecha_de_nacimiento, genero, email, contrasenia, confirmacion_de_contrasenia ) {
		this.nombre = (nombre.toUpperCase()).trim();
		this.apellido = (apellido.toUpperCase().trim());
		this.dni =(dni.replace(/\./g, "")).replace(/ /g, ""); //Acá quisiera eliminar los puntos y los espacios, como puedo sumar todo en una expresion regular?
		this.localidad = localidad;
		this.fecha_de_nacimiento = fecha_de_nacimiento; //Còmo validar que ingrese un formato de fecha correcta?
		this.genero = genero;
		this.email = email; //Còmo validar que ingrese un email correcto?
		this.contrasenia = contrasenia;
		this.confirmacion_de_contrasenia = confirmacion_de_contrasenia;
	}		
}
/* Fin de Constructor de Usuarios */

/* Inicio Constructor de Productos */
class Producto {
	constructor(id, imagen, titulo, precio, cantidad, subtotal) {
		this.id = id;
		this.imagen = imagen;
		this.titulo = titulo;
		this.precio = precio;
		this.cantidad = 1;
		this.subtotal = precio;
		// this.marca = marca;
		// this.descripcion_corta = descripcion_corta;
		// this.descripcion_larga = descripcion_larga;
		// this.categoria = categoria;
		// this.genero = genero;
		// this.talle = talle;
		// this.color = color;
		// this.vendido = false;
	}

	/* Retorna la descripción de las propiedades del los productos */
	getSaleInformacion(){
		return `${this.marca}\n${this.titulo}\n${this.precio}\n${this.categoria}\n${this.genero}\n${this.talle}\n${this.color}`;
	}

	/* Asigna un producto en vendido cuando el usuario finaliza la compra */
	vender() {
		this.vendido = true;
	}

	/* Setea un nuevo número ID al querer cargar un nuevo producto en el sistema */
	set_id(nuevo_id) {
		this.id = nuevo_id;
	}
}
/* Inicio Constructor de Productos */


export {
    Usuario,
    Producto 
};