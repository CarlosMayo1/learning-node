const os = require('node:os')

console.log('La informacion del sistema operativo:')
console.log('-------------------')
console.log('Nombre del sistema operativo: ', os.platform())
console.log('La version del sistema operativo:', os.version())
console.log('Arquitectura: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('uptime:', os.uptime() / 60 / 60)
