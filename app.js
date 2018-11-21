//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require("colors");
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion)
            .then(save => (console.log(`${save}`.green)))
            .catch(err => (console.log(`Error: ${err}`.red)));
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        if (listado.length > 0) {
            for (let tarea of listado) {
                console.log('==========================='.green);
                console.log('======== POR HACER ========'.green);
                console.log('==========================='.green);
                console.log(tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('===========================\n'.green);
            }
        } else {
            console.log('No hay tareas por hacer');
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('No se reconoce el comando.');
        break;
}