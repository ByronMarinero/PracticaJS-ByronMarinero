// ejemplo de carrito de compras para eliminar valores

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
};
const shortHombre001 = {
    nombre: 'banador de hombre',
    color: 'amarillo',
    precio: 14.25,
    longitud: {
        ancho: '12 pulgadas',
        largo: '13 pulgadas'
    }
};
const shortHombre003 = {
    nombre: 'short aesthetic',
    color: 'celeste',
    precio: 14.25,
    longitud: {
        talla: 'm'
    }
};
const shortHombre004 = {
    nombre: 'short retro',
    color: 'azul',
    precio: 14.25,
    longitud: {
        talla: 'm'
    }
};
const shortHombre005 = {
    nombre: 'short cool',
    color: 'blanco',
    precio: 14.25,
    longitud: {
        talla: 'm'
    }
};
carrito.push(gafasHombre001, gafasHombre002, shortHombre001, shortHombre003, shortHombre004, shortHombre005);

//eliminar ultimo elemento del arreglo...
carrito.pop();

//eliminar del inicio del arreglo...
carrito.shift();

//eliminar cualquier valor del array...  [2: es la posicion, 1: la cantidad que deseo eliminar]
carrito.splice(2, 1);

console.table(carrito);