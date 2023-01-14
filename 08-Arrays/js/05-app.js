const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

//agregar al final del arreglo
meses.push('junio');
meses.push('julio');
meses.push('agosto');

console.table(meses);

// ejemplo de carrito de compras

const carrito = [];

// definir productos
const gafasHombre001 = {
    nombre: 'Gafas de Sol',
    color: 'negro',
    precio: 12.50,
    longitud: {
        ancho: '12 pulgadas',
        largo: '14 pulgadas'
    }
};

const gafasHombre002 = {
    nombre: 'gafas de sol shein',
    color: 'blanco',
    precio: 14.25,
    longitud: {
        ancho: '12 pulgadas',
        largo: '13 pulgadas'
    }
}
const shortHombre001 = {
    nombre: 'banador de hombre',
    color: 'amarillo',
    precio: 14.25,
    longitud: {
        ancho: '12 pulgadas',
        largo: '13 pulgadas'
    }
}

// manera imperativa

// agregar objetos al array llamado carrito
carrito.push(gafasHombre001, gafasHombre002);

// poner un propiedad al inicio
carrito.unshift(shortHombre001);

console.table(carrito);





