// metodos de objetos

'use strict';

const producto = {
    nombre: 'consolador de 28 cm',
    precio: 70.50,
    disponible: true
 }

 // congelar todo lo que esta dentro de un objeto para no editarlo
 Object.freeze(producto);


 console.log(producto);


// para comprobar si el objeto esta congelado
 console.log(Object.isFrozen(producto)); //true

