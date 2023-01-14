// parametros por default

function saludar(nombre = 'desconocido', apellido = 'desconocido'){
    console.log(`Hola ${nombre} ${apellido}`);
};

saludar('byron','marinero');
saludar();

