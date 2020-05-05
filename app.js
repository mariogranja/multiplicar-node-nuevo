//Aqui van los require
const { argv } = require('./config/yargs');
const {crearArchivo, listarArchivo} = require('./multiplicar/multiplicar');
const colors = require('colors');
//Aqui va la declaracion de variables y resto del codigo
//let base = '6';

//let argv2 = process.argv;
//console.log(argv.base);



let comando = argv._[0];

switch ( comando ){
    case 'listar' :
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear' :
        crearArchivo(argv.base, argv.limite).then((archivo)=>{
            console.log('El archivo'.green,archivo.blue, 'ha sido creado'.green);
        }).catch(err=>{
            console.log(err);
        })     
        break;
    default:
        console.log('Comando no encontrado');

}






// let parametro = argv[2];
// let base = parametro.split('=')[1];


 