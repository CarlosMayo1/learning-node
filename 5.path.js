const path = require('node:path')

// barra separadora de carpetas segun sistema operativo
console.log(path.sep)

const filePath = path.join('.','content', 'subfolder', 'file.text')
console.log(filePath)

const base = path.basename('/tap/midudev-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tap/midudev-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)
