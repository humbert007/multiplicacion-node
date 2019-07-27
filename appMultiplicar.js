//normal  const multiplicar = require('./multiplicar/multiplicar')
// decostruccion
const argv = require('./config/yargs').argv // con el .argv se usa solo la constante deceada
const colors = require('colors') //importar en cada archivo q se use
const { createFile, listarTabla } = require('./multiplicar/multiplicar')
    // const { listarTabla } = require('./multiplicar/multiplicar')
    // let base = 'abs'
    // console.log(module); //informacion de la ejecucion
    // console.log(process.argv); //argumentos que llegan 
    // let argv2 = process.argv

// console.log(argv.limite); //imprecion de argumentos de yargs
// let parametro = argv[2]
// let base = parametro.split('=')[1]
// console.log(base);

let comando = argv._[0]
switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(lista => {
                console.log('+++++++++++++'.green);
                console.log('+++tabla+++'.green);
                console.log('+++++++++++++'.green);
                console.log(lista)
            })
            .catch(err => console.log(err))
        break;
    case 'crear':
        // console.log(argv.base);
        createFile(argv.base, argv.limite)
            .then(file => console.log(`archivo creado: `.red, file))
            .catch(err => console.log(err))
            // console.log(multiplicar);
        break;
    default:
        console.log('Comando no encontrado');
        break;
}