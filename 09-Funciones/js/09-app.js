// agregar funciones a un objeto

const reproductorMusica = {
    reproducir: function(id){
        console.log(`reproduciondo la cancion numero ${id}`);
    },
    pausar: function(id){
        console.log(`pausando... ${id}`);
    },
    crearPlayList: function(id, nombre){
        console.log(`creando playlist... ${id}, llamada: ${nombre}`);
    },
    reproducirPlayList: function(nombreLista){
        console.log(`reproduciendo playlist... ${nombreLista}`)
    },
    reproducirPlayListAleatoria: function(){
        console.log(`reproduciendo playlist de forma aleatoria...`);
    }
};

reproductorMusica.reproducir(31);
reproductorMusica.reproducir(2);
reproductorMusica.reproducir(45);
reproductorMusica.reproducir(89);

reproductorMusica.pausar(89);

reproductorMusica.crearPlayList(1, 'Musica de piano');

reproductorMusica.reproducirPlayList('Rock music');

reproductorMusica.reproducirPlayListAleatoria();


