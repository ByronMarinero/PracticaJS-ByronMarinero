// operador &&

const usuario = false;
const puedePagar = true;

if (usuario && puedePagar){
    console.log('si puede comprar');
}
else if(!puedePagar && !usuario){
    console.log('no puede comprar');
}
else if(!puedePagar){
    console.log('fondos insuficientes');
}
else if(!usuario){
    console.log('inicia sesion o saca una cuenta');
};

// ejemplo; matricula esfe
const solvente = true;
const NotasAprobadas = true;
const beca = false;

if (solvente && NotasAprobadas && beca){
    console.log('matriculado');
}
else if (!solvente && !NotasAprobadas){
    console.log('no te puedes matricular');
}
else if (!solvente){
    console.log('obten una beca o solventa tu pago');
}
else if (!beca){
    console.log('Matriculado, obten una beca si tu promedio es alto');
}
else if (!NotasAprobadas){
    console.log('repite nuevamente ano');
};


