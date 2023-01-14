// estructura de else if

const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;

if (dinero >= totalAPagar){
    console.log('si pondemos pagar');
} 
else if (tarjeta){
    console.log('si pondemos pagar porque tengo la tarjeta');
}
else if (cheque){
    console.log('si pondemos pagar porque tengo un cheque');
}
else{
    console.log('fondos insuficientes ');
};