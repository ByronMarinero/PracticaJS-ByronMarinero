// estructura de switch case

const metodoPago = 'cheque';

switch (metodoPago){
    case 'efectivo':
        pagarEfectivo();
        break;
    
    case 'cheque':
        console.log(`pagaste con ${metodoPago}`);    
        break;
    case 'tarjeta':
            if('tarjeta' != 0){
                pagarTarjeta();
            }
            else{
                console.log('la tarjeta esta suspendida');
            };
        break;
    case 'bitcoin':
        pagarBitcoin();
        break;
    default:
        console.log(`aun no has seleccionado ningun metodo de pago o el metodo noes valido`);
}

function pagarEfectivo() {
    console.log('pagando en efectivo...');
};

function pagarTarjeta(){
    console.log('pagando con tarjeta...');
};

function pagarBitcoin(){
    console.log('pagando con bitcoin...');
};