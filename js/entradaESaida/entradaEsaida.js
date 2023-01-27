const anonimo = process.argv.indexOf('-a') !== -1

if (anonimo) {
    process.stdout.write('Oi anonimo!')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')

    process.stdin.on('data', data => {
            //console.log('To aqui')
            const nome = data.toString().replace('\n', '')
            process.stdout.write(`Fala ${nome}\n`)
            process.exit()
        })
        //console.log('Processo finalizado')


}