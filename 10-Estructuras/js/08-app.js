// buenas practicas

const autenticado =true;

// si la variable ya fu declarada como true, no es necesario agregarla en el if
if(autenticado){
    console.log('el usuario esta autenticado');
};

// ejemplo de puntaje de algun juego
const puntaje = 450;

function revisarPuntaje() {

    if(puntaje > 400){
        console.log('excelente!!!');
        return;
    }
    if(puntaje > 300){
        console.log('buen puntaje... felicidades');
        return;
    }
};

revisarPuntaje();