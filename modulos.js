// require('yargs')(process.argv.slice(2)).argv

// const command = process.argv[2];



// if (command ==='add') {
//     console.log('agregando nota!');


// } else if (command === 'quitar') {
//     console.log('eliminando nota!');

// } else if (command === 'listar') {
//     'use strict';

//     console.log('listando notas!');
//     const fs = require('fs');
//     let rawdata = fs.readFileSync('./notas.json');
//     let notas = JSON.parse(rawdata);
//     console.log(notas);

// } 
// else  {
//     console.log('comando no reconocido!');
// }

function listar() {
    'use strict';
    const fs = require('fs');
    let rawdata = fs.readFileSync('./notas.json');
    let notas = JSON.parse(rawdata);
    return console.log(notas);
}


function agregar(titulo, cuerpo) {
    'use strict';
    const fs = require('fs');
    const obj = fs.readFileSync('./notas.json');
    let nota = JSON.parse(obj);
    
    
    nota.push({
        titulo: titulo,
        cuerpo: cuerpo
    });

   
    let data = JSON.stringify(nota);
    fs.writeFileSync('./notas.json', data);
    
    return console.log('nota agregada!');
}

function quitar(titulo) {
    'use strict';
    const fs = require('fs');
    const obj = fs.readFileSync('./notas.json');
    let nota = JSON.parse(obj);
   // console.log(nota);
    
    
    let index = nota.findIndex(nota => nota.titulo === titulo);
    if (index === -1) {
        return console.log('nota no encontrada!');
    }
    nota.splice(index, 1);
    let json = JSON.stringify(nota);
    fs.writeFileSync('./notas.json', json);
    return console.log('nota eliminada!');
}


module.exports.listar = listar;
module.exports.agregar = agregar;
module.exports.quitar = quitar;