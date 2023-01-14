// metodos de objeto vs metodos de array

const producto = {
    nombre: 'consolador de 28 cm',
    precio: 70.50,
    disponible: true
 }

 // extraer propiedades a una objeto
 // Destructuring
 const {nombre, precio, disponible} = producto;
 console.log(nombre);
 console.log(precio);
 console.log(disponible);


 // Distructuring con arrays

 const numeros = [10,20,30,40,50,60];
 const [primero, segundo, tercero, cuarto, quinto] = numeros
 console.log(primero, segundo, tercero, cuarto, quinto);

 // extraer un valor especifico
 const numeros2 = [100,200,300,400,500,600];
 const [ , , , , , sexto] = numeros2
 console.log(sexto);



 //extraer elementos unidos
 //const [ primero, segundo, ...tercero] = numeros

 //console.log(tercero);