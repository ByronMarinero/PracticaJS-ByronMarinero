// arreglo dentro de un arreglo, dentro de un arreglo, dentro de otro...

const numeros = [10, 20, 30, 40, 50, 60, [1, 2, 3, 5, [100,200,300]]]

console.log(numeros);
console.table(numeros);

//acceder al arreglo
console.log(numeros[2]);

// acceder a una subposicion
console.log(numeros[6][2]);

// acceder a una sub de subposicion 
// el numero representa la posicion del valor dentro de un arreglo, y el contador de la posicion empieza de 0
console.log(numeros[6][4][2]); // return: 300