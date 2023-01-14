// convinar funciones

iniciarApp();

function iniciarApp () {
    console.log('iniciar app...');

    segundaFuncion(); // convinacion de funciones
};

function segundaFuncion() {
    console.log('deesde la segunda funcion');

    usuarioAutenticado('Byron Marinero');
};


function usuarioAutenticado(usuario) {
    console.log('autenticando usuario...');
    console.log(`usuario autenticado exitosamente: ${usuario}`);
};



