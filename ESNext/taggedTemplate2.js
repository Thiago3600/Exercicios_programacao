const multiply = (a, b) => a * b

function real(partes, ...valores) {

    console.log(partes)
    console.log(valores)
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const aVista = 1299.99
const parcela = 3

console.log(real `O preço á vista é ${aVista}, e com parcelas de ${parcela} fica`)