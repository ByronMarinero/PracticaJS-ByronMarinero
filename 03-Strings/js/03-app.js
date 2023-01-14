const _producto = 'monitor 20 pulgadas ';
const _precio = '30 USD ';


// concatenar strings

console.log(_producto.concat(_precio));

console.log(_producto.concat('en descuento'));


// cocatenar const / variables
console.log(_producto +'con un precio de: '+ _precio);
console.log('el producto: '+ _producto + 'tiene un precio de: '+ _precio);
console.log('el producto: ', _producto , 'tiene un precio de: ', _precio);


// EMAScript 6 para concatenar strings

console.log(`El producto ${_producto} tiene un precio de $ ${_precio}`);

