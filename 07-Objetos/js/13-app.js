// metodos para objetos: keys, values, entries

const producto = {
    nombre: 'consolador de 28 cm',
    precio: 70.50,
    disponible: true,
 }

 // keys retorna las llaves del object
 console.log(Object.keys(producto));

 // values retorna valores de la llaves
 console.log(Object.values(producto));

 // entries retorna todo
 console.log(Object.entries(producto));