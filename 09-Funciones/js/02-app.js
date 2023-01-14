// diferencias de ambas formas de funcion

// declaracion de funcion  (funcion declaration) =  se puede declar la funcion y luego llamarla o bisebersa. da igual
sumar();
function sumar(){
    console.log( 2+2 );
};


// Exprecion de funcion (funcion expresion) = se tiene que declarar la funcion para luego llamarla,
//de lo contrario daria error
sumar2();
const sumar2 = function() {
    console.log(2+5);
};


// a esto se le conoce como hoisting, o etapas de ejecucion de js.
