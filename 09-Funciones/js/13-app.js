// cambiar a row funcion

const reproductorMusica = {
    reproducir: id => console.log(`reproduciondo la cancion numero ${id}`)
    ,
    pausar: id =>
        console.log(`pausando... ${id}`)
    ,
    crearPlayList: (id, nombre) => console.log(`creando playlist... ${id}, llamada: ${nombre}`)
    ,
    reproducirPlayList: nombreLista => console.log(`reproduciendo playlist... ${nombreLista}`)
    ,
    reproducirPlayListAleatoria: () => console.log(`reproduciendo playlist de forma aleatoria...`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`anadir cancion ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
};

reproductorMusica.nuevaCancion = 'john lennon'
reproductorMusica.obtenerCancion;

reproductorMusica.reproducir(31);

reproductorMusica.pausar(89);

reproductorMusica.crearPlayList(1, 'Musica de piano');

reproductorMusica.reproducirPlayList('Rock music');

reproductorMusica.reproducirPlayListAleatoria();

