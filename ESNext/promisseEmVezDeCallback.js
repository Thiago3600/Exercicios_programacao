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

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))















// function getNomes(alunos, element) {
//     return a => `${element}: ${a.nome}`
// }

// function getNomesTurmas(turmasLetra = []) {
//     let nomes = []
//     for (const element of turmasLetra) {
//         //console.log(element)
//         getTurma(element, alunos => {
//             console.log(alunos.map(a => `${element}: ${a.nome}`))
//             nomes = nomes.concat(alunos.map(getNomes(element, alunos)))
//         })
//     }
//     return nomes
// }


// console.log(getNomesTurmas(['A', 'B', 'C']))

// // getTurma('A', alunos => {
// //     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))

// // })