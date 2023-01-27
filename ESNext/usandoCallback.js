const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

function getNomes(alunos, element) {
    return a => `${element}: ${a.nome}`
}

function getNomesTurmas(turmasLetra = []) {
    let nomes = []
    for (const element of turmasLetra) {
        //console.log(element)
        getTurma(element, alunos => {
            console.log(alunos.map(a => `${element}: ${a.nome}`))
            nomes = nomes.concat(alunos.map(getNomes(element, alunos)))
        })
    }
    return nomes
}


console.log(getNomesTurmas(['A', 'B', 'C']))

// getTurma('A', alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))

// })