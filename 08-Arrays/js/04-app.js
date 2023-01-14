// modificar arreglos

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre'];


// modificar un array fuera del array

meses[0] = 'nuevo mes';

// agragar mas propiedades al array fuera del array
meses[9] = 'ultimo mes'

console.table(meses);


//otro ejemplo: 
const pipsTrades = ['45 pips','88 pips', '34 pips', '340 pips']

// moficar array 
pipsTrades[0] = '145 pips';

// agrgar mas propiedades
pipsTrades[4] = '78 pips';

console.table(pipsTrades);