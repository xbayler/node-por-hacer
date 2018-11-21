let descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
}

const argv =
    require("yargs")
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado: { alias: 'c', default: true, desc: 'Marca como completado o pendiente la tarea' } })
    .command('borrar', 'Borrar tarea por su descripción', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
};