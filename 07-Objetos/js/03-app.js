const producto = {
    nombre: 'consolador de 28 cm',
    precio: 70.50,
    disponible: true
 }


 // agregar nuevas propiedades al objeto
 producto.imagen = 'imagen.jpg';

 // eliminar propiedades del objeto
delete producto.disponible;

 console.log(producto);

