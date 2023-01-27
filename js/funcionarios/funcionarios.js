const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')
const { filter } = require('lodash')
    // {   "id":1,
    //     "nome":"Feodor",
    //     "sobrenome":"Pheby",
    //     "email":"fpheby0@163.com",
    //     "genero":"M",
    //     "cidade":"Bal’shavik",
    //     "pais":"Belarus",
    //     "empresa":"Dabjam",
    //     "salario":2401.69
    // }

const filterM = g => g.genero === 'M'
const filterF = g => g.genero === 'F'
const filterChina = pais => pais.pais === "China"
const menorSalario = (acumulador, atual) => acumulador.salario > atual.salario ? atual : acumulador

axios.get(url).then(response => {
    const funcionariosArray = response.data
        // console.log(funcionariosArray[1])
    console.log(funcionariosArray.filter(filterF).filter(filterChina).reduce(menorSalario))
})