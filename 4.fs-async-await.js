const { readFile } = require('node:fs/promises');

(
  async () => {
    console.log('Leyendo el primer archivo')

    const text = await readFile('./file.txt', 'utf-8')

    console.log('Leyendo el primer texto: ', text)

    console.log('---> haciendo cosas mientras lee los archivos')

    const secondText = await readFile('./file2.txt', 'utf-8')

    console.log('Leyendo el segundo archivo: ', secondText)
  }
)()

