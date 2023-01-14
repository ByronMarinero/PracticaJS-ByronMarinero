// funciones dentro de un objeto


const producto = {
    nombre: 'consolador de 28 cm',
    precio: 70.50,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el producto: ${this.nombre} tiene in precio de: ${this.precio}$`);
    }
 }

 const producto2 = {
    nombre: 'tablet',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el producto: ${this.nombre} tiene in precio de: ${this.precio}$`);
    }
 }

 producto.mostrarInfo();
 producto2.mostrarInfo();

