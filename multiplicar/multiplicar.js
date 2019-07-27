const fs = require('fs')
let data = ''
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base}  No es un numero`)
            return
        }
        for (let index = 1; index <= limite; index++) {
            data += `${base} X ${index} = ${base*index}\n`;
        }
        resolve(data)
    })
}


let createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base}  No es un numero`)
            return
        }
        for (let index = 1; index <= limite; index++) {
            // console.log(`${base} * ${index} = ${res}`);
            data += `${base} * ${index} = ${base * index}\n`
        }

        const archivo = new Uint8Array(Buffer.from(data));
        fs.writeFile(`tablas/tabla-${base}.txt`, archivo, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla del: ${base} al ${limite}`)
        });
    })
}

module.exports = {
    createFile,
    listarTabla
}