// metodos de strings

const producto = 'monitor 20 pulgadas';


console.log(producto);

// .replace para reemplazar
console.log(producto.replace('pulgadas', '"'));

console.log(producto.replace('monitor', 'monitor curvo'));



// .slice para cortar

console.log(producto.slice(0, 10));

//alternativa a slice
console.log(producto.substring(0,10));



