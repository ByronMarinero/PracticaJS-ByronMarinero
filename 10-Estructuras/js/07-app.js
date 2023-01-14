// operador or

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalAPagar = 600;
const nombreCliente = 'Byron Marinero';

if(efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar){
    procPago();
}
else
{
    console.log(`El cliente ${nombreCliente} tiene saldo insuficiente`);
}

function procPago(){
    console.log(`${nombreCliente} has cancelado con exito` );
}

