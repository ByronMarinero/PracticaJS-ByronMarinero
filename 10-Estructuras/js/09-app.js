// operador ternario (mejor opcion para if)

const autenticado = true;
const puedePagar = false;
const usuario = 'Byron Marinero';


// ternario
console.log(autenticado || puedePagar ?  `Si puede pagar` : 'No, no esta autenticado' );



// ternario anidado

console.log(autenticado ? puedePagar ? 'si esta autenticado y puede pagar'  : 'si esta autenticado, no puede pagar'  : 'No, no esta autenticado' );



// mas ejemplos: inscripcion de materia esfe

const reprobado = false;
const sinPagar = false;

console.log(reprobado || sinPagar ?  'No estas inscrito'  :  'si estas inscrito' );

