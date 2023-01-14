// Una variable constante no se puede reasignar, pero si esta dentro de un objeto si

const producto = {
    nombre: 'consolador de 28 cm',
    precio: 70.50,
    disponible: true
 }

 producto.disponible = false;

 console.log(producto);