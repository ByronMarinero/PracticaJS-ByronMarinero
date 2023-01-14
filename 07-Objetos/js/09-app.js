// metodos de objetos

'use strict';

const producto = {
    nombre: 'consolador de 28 cm',
    precio: 70.50,
    disponible: true
 }

 // seal permite ediar propiedades existentes, no permite eliminar y agregar
 Object.seal(producto);

// para comprobar si el objeto esta con seal
 console.log(Object.isSealed(producto));

 console.log(producto);