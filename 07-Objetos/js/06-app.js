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
                barato: 'distribuidorBarato',
                caro: 'distribuidorCaro'
            }
        }
    }
 }

 // acceder a un objeto para asignarla a una variable con distructuring

 //accediendo a disponible en el ejemplo
 const {disponible} = producto

 // accediendo a barato que esta en fabricacion dentro de informacion.

 const {nombre, informacion, informacion: {fabricacion, fabricacion: {distribuidor, distribuidor:{barato}}}} = producto;



