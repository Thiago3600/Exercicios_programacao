const fs = require('fs')
const path = require('path')

const caminho = __dirname
const arquivo = 'dados.txt'

const joinPath = (caminho, arquivo) => caminho.concat('\\', arquivo)
    //console.log(joinPath(caminho, arquivo))


function obterDados(arquivo) {
    return new Promise(function(resolve) {
        fs.readFile(joinPath(caminho, arquivo), function(_, conteudo) {
            resolve(conteudo.toString())
        })

    })
}

obterDados(arquivo).then(console.log)