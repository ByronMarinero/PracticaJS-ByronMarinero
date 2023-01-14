const producto = {
    nombre: 'consolador de 28 cm',
    precio: 70.50,
    disponible: true
 }

 // extraer propiedades a una variable

 // forma antigua
 //const nombre = producto.nombre;
 //console.log(nombre);

 // forma nueva
 // Destructuring
 const {nombre, precio, disponible} = producto;
 console.log(nombre);
 console.log(precio);
 console.log(disponible);

 console.log(`El ${nombre} y el precio es: ${precio}$`);

 