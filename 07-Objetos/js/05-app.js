// objetos fractalizados

const producto = {
    nombre: 'consolador',
    precio: 70.50,
    disponible: true,
    informacion: {
        peso: '5.3kg',
        medida: {
            altura: '28.3 cm',
            ancho: "5.8 cm"
        },
        fabricacion: {
            pais: 'china',
            clase: 'b',
            estado: 'nuevo',
            distribuidor: {
                barato: 'distribuidor1',
                caro: 'distribuidor2'
            }
        }
    }
 }

 console.log(producto);
 console.log(producto.informacion.medida.altura);
 console.log(producto.informacion.medida.ancho);
 console.log(producto.informacion.fabricacion.distribuidor.barato);


