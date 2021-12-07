const yargs =   require('yargs');
const nota =    require('./modulos.js');

yargs.command({
    command: 'agregar',
    describe: 'agregar una nueva nota', builder: {
    titulo: {
    describe: 'titulo ', demandOption: true,
    type: 'string'
    },
    cuerpo: {
    describe: 'cuerpo ', demandOption: true,
    type: 'string'
    }
    },
    handler: function (argv) { 
        nota.agregar(argv.titulo, argv.cuerpo);
    }
    



    });

    // eliminar

    yargs.command({
        command: 'quitar',
        describe: 'eliminar  nota', builder: {
           
                titulo: {
                    describe: 'Note title',
                    demandOption: true,
                    type: 'string'
                }
            },
            handler(argv) {
                nota.quitar(argv.title)
            }
        
    
    
    
        });


        yargs.command({
         command: 'listar',
         describe: 'listar notas',
            handler: function () {
                nota.listar();
            }
        });


console.log(yargs.argv);