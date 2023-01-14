const carrito = [
    {nombre: 'monitor 20 pulgadas', precio: 500},
    {nombre: 'laptop', precio: 800},
    {nombre: 'mouse', precio: 15},
    {nombre: 'cpu', precio: 500},
    {nombre: 'laptop', precio: 400},
    {nombre: 'pantalla curva', precio: 1000}
]

// array method

// formas de iterar
// foreach no crea un nuevo arreglo
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
});


// .map crea un nuevo arreglo
carrito.map(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
});
