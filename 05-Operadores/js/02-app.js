// operadores de comparacion estrictos

const numero1 = 20;
const numero2 = '20';
const numero3 = 30;

// revisar si dos numeros son iguales

console.log(numero1 == numero3); // false
console.log(numero1 == numero2); // true

// comparador estricto

console.log(numero1 === numero2); // false, regresa asi porque el tipo de dato es diferente
console.log(numero1 === parseInt(numero2)); // true, porque ya lo parsie a int
console.log(typeof numero1);
console.log(typeof numero2);

// comparador diferente

const password1 = 'admin';
const password2 = 'Admin';

console.log(password1 != password2); //true
console.log(numero1 != numero2); // false
console.log(numero1 !== numero2); // true
console.log(numero1 !== parseInt(numero2)); // false