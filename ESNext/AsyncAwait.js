const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

//Recurso do ES8
// Objetivo de simplicar o uso de promises
let obterAlunos = async turmas => {
    let t = []
    for (const iterator of turmas) {
        t = t.concat(await getTurma(iterator))
    }
    return t
}

obterAlunos(['A', 'B', 'C'])
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))

// Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
//     .then(turmas => [].concat(...turmas))
//     .then(alunos => alunos.map(aluno => aluno.nome))
//     .then(nomes => console.log(nomes))
//     .catch(e => console.log(e.message))