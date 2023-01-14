// funciones que  toman parametros y argumentos

function sumar(){
    console.log( 2+2 );
};


// se puede reutilizar
sumar();



// ejemplo real:

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
};

saludar('Byron','Marinero');

saludar('',''); // retorna undefind