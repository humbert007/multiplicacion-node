const fs = require('fs')
let base = 3

let data = ''
    // let mutiplicar = (base) => {
for (let index = 1; index <= 10; index++) {
    // console.log(`${base} * ${index} = ${res}`);
    data += `${base} * ${index} = ${base * index}\n`
}
// }
const archivo = new Uint8Array(Buffer.from(data));
fs.writeFile(`tablas/tabla-${base}.txt`, archivo, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla ${base} ha sido creado!`);
});

// mutiplicar(base)