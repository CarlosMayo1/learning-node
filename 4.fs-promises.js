const fs = require('node:fs')
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo')

readFilePromise('./file.txt', 'utf-8')
.then(text => {
    console.log('Leyendo el primer texto: ', text)
})

console.log('---> haciendo cosas mientras lee los archivos')

console.log('Leyendo el segundo archivo')
readFilePromise('./file2.txt', 'utf-8')
.then(text => {
  console.log('Leyendo el segundo texto: ', text)
})