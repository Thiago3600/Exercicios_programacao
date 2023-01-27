const cumprimentar = texto => "Hello, " + texto
const converterAnoParaDias = idade => idade * 365
const calcularSalario = (horas, valorHora) => horas * valorHora
const nomeMes = mes => {
    let texto = "Erro"
    const meses = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    if (Number.isInteger(mes) && mes > 0 && mes < 13) {
        texto = meses[mes - 1]
    }
    return texto
}
const maiorOuIgual = (a, b) => a >= b ? true : false
const inverso = (num) => {
    if (typeof num === 'boolean') {
        return !num
    } else if (typeof num === 'number') {
        return -1 * num
    } else {
        return `booleano ou números esperado, mas o parâmetro é do tipo ${typeof num}`
    }
}
const estaEntre = (numero, min, max, inclusivo = false) => {
    let minimo = min
    let maximo = max
    if (inclusivo) {
        minimo--
        maximo++
    }
    if (numero > minimo && numero < maximo) {
        return true
    } else {
        return false
    }
}
const multiplicar = (a, b) => {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a >= 0 && b >= 0) {
            return a * b
        } else {
            return `Esperado numeros positivos os numeros recebidos foram ${a}, ${b}`
        }
    } else {
        return `Esperado numeros inteiros`
    }
}
const repetir = (any, n) => {
    let array = []
    let count = 0
    do {
        array.push(any)
        count++
    } while (count < n)
    return array
}
const simboloMais = a => {
    let simbol = ''
    if (typeof a === 'number') {
        let count = 0
        while (count < a) {
            simbol = simbol.concat('+')
            count++
        }
    }
    return simbol
}
const receberPrimeiroEUltimoElemento = array => {
    return [array[0], array[array.length - 1]]
}
const removerPropriedade = (objeto, item) => {
    const obj = {}
    if (typeof objeto === 'object') {
        for (const key in objeto) {
            if (Object.hasOwnProperty.call(objeto, key)) {
                if (key != item) {
                    obj[key] = objeto[key]
                }
            }
        }
    }
    return obj
}
const inNum = n => {
    if (typeof n === 'number') {
        return n
    } else {
        return null
    }
}

const filtrarNumeros = array => {
    return array.filter(function(p) {
        return typeof p === 'number'
    })
}

const receberSomenteOsParesDeIndicesPares = array => {
    return array.filter(function(numero, indice) {
        return (numero % 2 === 0) && (indice % 2 === 0)
    })
}


const checarAnoBissexto = ano => {
    const anoMultde4 = ano => ano % 4 === 0 ? true : false
    const anoMultde100 = ano => ano % 100 === 0 ? true : false
    const anoMultde400 = ano => ano % 400 === 0 ? true : false
    if (anoMultde4(ano) && (!anoMultde100(ano) || anoMultde400(ano))) {
        return true
    } else {
        return false
    }
}
const soma = (a, b) => a + b

const num = [10, 10, 10]
const result = num.reduce(soma)

const produtos = [
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]
const celular = [
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]

const getPreco = produto => produto.preco
const resultados = produtos => produtos.map(getPreco).reduce(soma)

const mediaSimples = array => array.reduce(soma) / array.length


const media = [1, 2, 3, 4, 5]

const areaDoTriangulo = (base, altura) => base * altura / 2

const menorQual = (a, b) => a < b ? a : b


const menorNumero = array => array.reduce(menorQual)
const numerosMenor = [10, 5, 35, 65]

const funcaoDaSorte = n => {
    let x = Math.random() * 10
    x = x.toFixed(0)
    if (x == n) {
        return `Parabéns, seu numero ${x} foi sorteado`
    } else {
        return `Infelizmente o numero ${n} não foi sorteado, o numero é ${x}`
    }
}