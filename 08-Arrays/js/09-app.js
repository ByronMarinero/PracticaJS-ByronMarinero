const carrito = [
    {nombre: 'monitor 20 pulgadas', precio: 500},
    {nombre: 'laptop', precio: 800},
    {nombre: 'mouse', precio: 15},
    {nombre: 'cpu', precio: 500},
    {nombre: 'laptop', precio: 400},
    {nombre: 'pantalla curva', precio: 1000}
]

// no esta mal pero hay mejores y nuevas sintaxis 
for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);
    };



// array method
// foreach se comporta igual al for de arriba

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
});



//ejemplo: lista de reacciones de fb
const reacciones = [
    {nombre: 'alma marcela', tipo: 'me divierte'},
    {nombre: 'Byron ', tipo: 'me gusta'},
    {nombre: 'maria', tipo: 'me entristece'},
    {nombre: 'jose', tipo: 'me asombra'},
    {nombre: 'fernando', tipo: 'me gusta'},
    {nombre: 'amilcar', tipo: 'me enoja'}
];

reacciones.forEach(function(reacciones) {
    console.log(`${reacciones.nombre} - tipo de reacciones: ${reacciones.tipo}`);
});

