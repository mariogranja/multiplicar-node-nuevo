let opc = {
    base : {
        demand: true,
        alias: 'b'
    },
    limite : {                        
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('listar','Lista la tabla que se especifica',opc)
                .command('crear','Crea el archivo de las tablas dependiendo de la base y del limite',opc)
                .help()
                .argv;

module.exports = {
    argv
}