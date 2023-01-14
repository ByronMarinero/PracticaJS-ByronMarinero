// funciones Math. en js

let resultado

// PI
resultado = Math.PI;

// para redonderar numeros deecimales
resultado = Math.round(2.4);


// redonderar forzosamente hacia arriba/abajo
resultado = Math.ceil(2.3);
// hacia arriba
resultado = Math.floor(2.6);

// sacar la raiz cuadrada
resultado = Math.sqrt (245);

// sacar el valor absoluto
resultado = Math.abs(-500);

// potencia
resultado = Math.pow (8, 3);

// sacar el minimo de una serie de numeros
resultado = Math.min(546456, 567457646, 45353534);

// sacar el maximo de una serie de numeros
resultado = Math.max(546456, 567457646, 45353534);

// aleatorio
resultado = Math.random () * 20;


// ejemplo:
// aleatorio dentro de un rango, por ejemplo para una rifa
resultado = Math.floor(Math.random() * 30);

console.log(`El resultado de la operacion es: ${resultado}`);


