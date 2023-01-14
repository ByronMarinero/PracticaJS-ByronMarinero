// funciones

// una funcion se puede reutilizar



// declaracion de funcion  (funcion declaration)
function sumar(){
    console.log( 2+2 );
};


// se puede reutilizar
sumar();
sumar();
sumar();
sumar();


// Exprecion de funcion (funcion expresion)
const sumar2 = function() {
    console.log(2+5);
};

sumar2();