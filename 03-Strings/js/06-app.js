const producto = 'monitor 20 pulgadas';


// .repeat te va a permitir copiar una cadena de texto...

const texto = 'en promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);


// .split permite dividir un string

const actividad = 'estoy aprendiendo javascript';
console.log(actividad.split(' '));

// ejemplo

const hobbies = 'leer, caminar, escuchar musica, escribir, aprender a programar, hacer trading'

console.log(hobbies.split(","));

const tweet = 'aprendiendo trading #IloveTrading2022'
console.log(tweet.split('#'));

const _hobbies = 'leer + caminar + escuchar musica + escribir + aprender photoshop + hacer trading';
console.log(byronActivities.split('+'));