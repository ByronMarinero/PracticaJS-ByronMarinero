// metodos de objeto  (unir)


const producto = {
    nombre: 'consolador de 28 cm',
    precio: 70.50,
    disponible: true
 }

 const medidas = {
    peso: '1kg',
    medida: '1m'
 }

 //unir objetos

 const resultado = Object.assign(producto, medidas);
 console.log(resultado);


 // otra forma mas nueva de unir objeto
 //spread operator o rest operator

 const resultado2 = { ...producto, ...medidas }
 console.log(resultado2);