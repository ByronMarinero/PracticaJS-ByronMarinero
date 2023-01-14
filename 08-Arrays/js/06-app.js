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

// manera declarativa
// hace los mismo a push pero con spread operator
let resultado;
resultado = [...carrito, gafasHombre001];

resultado = [...resultado, gafasHombre002];

resultado = [...resultado, shortHombre001];

console.table(resultado);