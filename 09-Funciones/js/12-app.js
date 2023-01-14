const carrito = [
    {nombre: 'monitor 20 pulgadas', precio: 500},
    {nombre: 'laptop', precio: 800},
    {nombre: 'mouse', precio: 15},
    {nombre: 'cpu', precio: 500},
    {nombre: 'laptop', precio: 400},
    {nombre: 'pantalla curva', precio: 1000}
]

// funcion con arrow 
carrito.forEach((producto) => {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
});


carrito.map((producto) => {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
});