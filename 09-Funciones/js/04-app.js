//  diferencia entre funciones y metodos

const numero1 = 20;
const numero2 = '20';

console.log(parseInt(numero2)); // esto es una funcion   (lo que esta dentro de los parentesis se le conoce como argumento)

console.log(numero1.toString); // esto es un metodo

// los dos hacen practicamente lo mismo


// ejemplo:

function sumar(a,b){  // a y b son parametros de funcion
    console.log( a+b );
};


sumar(2,3); // 2 y 3 son argumentos


