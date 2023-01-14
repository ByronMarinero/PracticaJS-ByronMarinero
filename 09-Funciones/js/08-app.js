// funciones que retornan valores

function sumar (a, b) {
    return a + b
};

const resultado = sumar(2, 3);

console.log(resultado);


// ejemplo mas avanzado

// carrito de compras

let total = 0;
function agregarCarrito(precio){
    return total += precio;
};

function calcularImpuestoIva(total){
    return total * 1.13;
};

total = agregarCarrito(600);
total = agregarCarrito(438);
total = agregarCarrito(100);

const totalPagar = calcularImpuestoIva(total);

console.log(`El total a pagar es con iva: ${totalPagar}`);

console.log(total);