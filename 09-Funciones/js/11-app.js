// ventajas de usar arrow functions

const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript', 'Node.js');


// arrow funcion

const aprendiendo2 = (tecnologia, tecnologia2) => `aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('JavaScript', 'Node.js'));