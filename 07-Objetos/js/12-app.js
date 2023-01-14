// object literal (mas usado)

const producto = {
    nombre: 'consolador de 28 cm',
    precio: 70.50,
    disponible: true,
 }

 // object constructor

 function producto(nombre, producto){
    this.nombre = nombre;
    this.precio = this.precio;
    this.disponible = true;
 };

 const producto2 = new producto('monitor de 24 pulgadas', 500);
 console.log(producto2);

 const producto3 = new producto('television', 100);
 console.log(producto3);