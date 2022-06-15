let arrayUsuarios = Usuario;
const recuperarStorage = JSON.parse(localStorage.getItem("listasDeUsuarios"));

if(recuperarStorage) {
    arrayUsuarios = recuperarStorage;
}

console.log(arrayUsuarios.nombre); 
console.log(arrayUsuarios.apellido); 
console.log(arrayUsuarios.dni); 
console.log(arrayUsuarios.localidad);  // Estos datos son los que necesito imprimir. Pero no pasa nada. No se como pensar en el manejo de los datos


// console.log(recuperarStorage.nombre); 
// console.log(recuperarStorage.apellido); 
// console.log(recuperarStorage.dni); 
// console.log(recuperarStorage.localidad);

